// /api/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { initializeDB } = require('../config/db'); // Adjust path as needed

// Imports for your routes
const productRoutes = require('../routes/productRoutes');
const categoryRoutes = require('../routes/categoryRoutes');
const orderRoutes = require('../routes/orderRoutes');
// More routes as needed

const app = express();

app.use(cors());
app.use(express.json());

initializeDB();

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);
// More routes...

app.get('/', (req, res) => {
  res.json({ message: '🛒 E-commerce API is running with Vercel!' });
});

// This is the Vercel-specific export!
module.exports = app;
