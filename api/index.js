const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { initializeDB } = require('../config/db'); 


const productRoutes = require('../routes/productRoutes');
const categoryRoutes = require('../routes/categoryRoutes');
const orderRoutes = require('../routes/orderRoutes');

const app = express();

app.use(cors());
app.use(express.json());

initializeDB();

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.json({ message: '🛒 E-commerce API is running with Vercel!' });
});

module.exports = app;
