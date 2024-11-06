import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sendOrderConfirmationEmail = async () => {
      const userEmail = localStorage.getItem('userEmail');
      try {
        await axios.post('http://localhost:5000/send-order-confirmation', { email: userEmail });
        console.log('Order confirmation email sent');
      } catch (error) {
        console.error('Error sending order confirmation email', error);
      }
    };

    sendOrderConfirmationEmail();
  }, []);

  return (
    <div className="order-confirmation-page">
      <h2>Order Placed Successfully!</h2>
      <p>Your order has been placed. A confirmation email has been sent.</p>
      <button onClick={() => navigate('/orders')}>View Orders</button>
    </div>
  );
};

export default OrderConfirmation;
