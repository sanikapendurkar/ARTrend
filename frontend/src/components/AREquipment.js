import React, { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const AREquipment = () => {
  const videoRef = useRef(null);   // For capturing live video
  const canvasRef = useRef(null);  // For drawing captured images
  const rendererRef = useRef(null);  // For rendering the 3D model using Three.js
  const [capturedImage, setCapturedImage] = useState(null);  // State for storing captured image
  const [isCameraActive, setIsCameraActive] = useState(true);  // State for toggling camera

  // Start the camera when the component mounts
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Error accessing camera: ", err);
    }
  };

  // Take a picture by capturing a frame from the video
  const takePicture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (video && canvas) {
      // Set the canvas size to the video dimensions
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0);

      // Convert the canvas content to a data URL (image)
      const imageDataUrl = canvas.toDataURL('image/png');
      setCapturedImage(imageDataUrl);
      setIsCameraActive(false); // Stop the camera
    }
  };

  // Start the camera when the component mounts and clean up when unmounting
  useEffect(() => {
    startCamera();

    const videoElement = videoRef.current;
    return () => {
      if (videoElement && videoElement.srcObject) {
        const tracks = videoElement.srcObject.getTracks();
        tracks.forEach(track => track.stop());  // Stop the camera when the component unmounts
      }
    };
  }, []);

  // Render the 3D model after capturing the image
  useEffect(() => {
    if (capturedImage) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(500, 500);
  
      const currentRendererRef = rendererRef.current; // Copy the ref to a local variable
      currentRendererRef.appendChild(renderer.domElement);
  
      const light = new THREE.AmbientLight(0xffffff, 1); // Lighting for better model visibility
      scene.add(light);
  
      const loader = new GLTFLoader();
      loader.load('/untitled.gltf', (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5); // Adjust scale
        model.position.set(0, 0, 0); // Center the model
        scene.add(model);
      }, undefined, (error) => {
        console.error("Error loading GLTF model: ", error);
      });
  
      camera.position.z = 2;
  
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
  
      animate();
  
      // Clean up the renderer
      return () => {
        renderer.dispose();
        if (currentRendererRef) {
          currentRendererRef.removeChild(renderer.domElement); // Use the local variable in cleanup
        }
      };
    }
  }, [capturedImage]);
  

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <h2>Visualize AR Glasses</h2>

      {/* Video feed and capture button */}
      {isCameraActive && (
        <div style={{ display: 'flex', alignItems: 'flex-start', width: '500px', height: '500px', position: 'relative' }}>
          <video ref={videoRef} autoPlay style={{ width: '100%', height: '100%', objectFit: 'cover' }}></video>
          <button 
            className="take-picture-button" 
            onClick={takePicture} 
            style={{ position: 'absolute', right: '10px', top: '10px', padding: '10px 20px' }}
          >
            Capture Picture
          </button>
        </div>
      )}

      {/* Show the captured image and 3D model on top of it */}
      {capturedImage && (
        <div style={{ position: 'relative', width: '500px', height: '500px' }}>
          <img src={capturedImage} alt="Captured" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div ref={rendererRef} style={{ position: 'absolute', top: 0, left: 0, width: '500px', height: '500px' }} />
        </div>
      )}

      {/* Hidden canvas element for capturing video frames */}
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default AREquipment;
