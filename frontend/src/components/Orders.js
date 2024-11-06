import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchOrders();
    }
  }, [navigate]);

  const fetchOrders = async () => {
    const userEmail = localStorage.getItem('userEmail');
    console.log('Fetching orders for:', userEmail);
    try {
      const response = await axios.get(`http://localhost:5000/orders?userId=${userEmail}`); // Use userId
      console.log('Fetched orders:', response.data);
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders', error);
    }
  };

  const updateTrackingStatus = useCallback((orderId, currentStatus) => {
    const statuses = ['Order Placed', 'Order Packed', 'Order Shipped', 'Out for Delivery', 'Order Delivered'];
    const nextStatusIndex = statuses.indexOf(currentStatus) + 1;

    if (nextStatusIndex < statuses.length) {
      const nextStatus = statuses[nextStatusIndex];
      axios.post('http://localhost:5000/update-status', { orderId, status: nextStatus })
        .then(() => {
          fetchOrders();
        })
        .catch(error => console.error('Error updating order status', error));
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      orders.forEach(order => {
        if (order.status !== 'Order Delivered') {
          updateTrackingStatus(order._id, order.status);
        }
      });
    }, 120000); // Update every 2 minutes

    return () => clearInterval(intervalId);
  }, [orders, updateTrackingStatus]);

  return (
    <div className="orders-page">
      <h2>Your Orders</h2>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className="order-item">
            <h3>Order #{order._id}</h3>
            <p>Status: {order.status}</p>
            <ul>
              {order.products.map((product, idx) => (
                <li key={idx}>
                  Product ID: {product.productId} - Quantity: {product.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Orders;
