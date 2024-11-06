import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchCartItems();
    }
  }, [navigate]);

  const fetchCartItems = () => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  };

  const moveToWishlist = (item) => {
    console.log(`Move ${item.name} to wishlist`);
  };

  const handleBuyNow = async () => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      console.error('User email is not found in local storage');
      return; // Prevent further execution if userEmail is not available
    }

    const orderData = {
      userId: userEmail, // Change here to match the backend requirement
      products: cartItems.map(item => ({
        productId: item.id, // Adjust according to your schema
        quantity: 1
      })),
      totalAmount: cartItems.reduce((total, item) => total + item.price, 0),
    };

    try {
      await axios.post('http://localhost:5000/orders', orderData); // Ensure the URL is correct
      localStorage.removeItem('cartItems'); // Clear cart after placing the order
      navigate('/order-confirmation'); // Navigate to order confirmation
    } catch (error) {
      console.error('Error placing order', error);
    }
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <button onClick={() => moveToWishlist(item)}>Move to Wishlist</button>
            </div>
          ))}
          <button onClick={handleBuyNow}>Buy Now</button>
        </>
      )}
    </div>
  );
};

export default Cart;
