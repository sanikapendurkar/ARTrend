const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/Users');
const orderRoutes = require('./routes/Order');
const productRoutes = require('./routes/Product'); // Import the product routes

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/lookify')
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.error('MongoDB connection error:', error));

app.use('/auth', userRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes); // Add the product routes here

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
