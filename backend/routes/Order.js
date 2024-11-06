const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const nodemailer = require('nodemailer');

// Place an order
router.post('/', async (req, res) => {
  const { userId, products, totalAmount } = req.body;
  try {
    if (!products || products.length === 0) {
      return res.status(400).json({ success: false, message: 'No products provided' });
    }

    const newOrder = new Order({ userId, products, totalAmount });
    await newOrder.save();

    await sendOrderConfirmation(userId); // Send email to the userId

    res.status(201).json({ success: true, message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ success: false, message: 'Error placing order', error: error.message });
  }
});

// Get user's orders
router.get('/', async (req, res) => {
  const { userId } = req.query;
  try {
    const orders = await Order.find({ userId });
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ success: false, message: 'Error fetching orders', error });
  }
});

// Update order status
router.post('/update-status', async (req, res) => {
  const { orderId, status } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
    res.json(order);
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ success: false, message: 'Error updating order status', error });
  }
});

// Send order confirmation email
const sendOrderConfirmation = async (email) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'mern.project16010122@gmail.com', // Replace with your email
      pass: 'ptgraeytnvpuijuh', // Replace with your app password
    },
    debug: true, // Log connection
    logger: true, // Log emails
  });

  const mailOptions = {
    from: 'mern.project16010122@gmail.com', // Replace with your email
    to: email,
    subject: 'Order Confirmation',
    text: 'Your order has been placed successfully!',
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Order confirmation email sent to:', email);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = router;
