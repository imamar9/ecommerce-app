const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('./models/product.model');
const Category = require('./models/category.model');

const products = require('./data/products');
const categories = require('./data/categories');

const MONGODB = process.env.MONGODB;

const seed = async () => {
  await mongoose.connect(MONGODB);

  await Product.deleteMany({});
  await Category.deleteMany({});

  const insertedCategories = await Category.insertMany(categories);

  const catMap = {};
  insertedCategories.forEach(cat => { catMap[cat.name] = cat._id; });

  const productsWithCategoryId = products.map(product => ({
    ...product,
    categoryId: catMap[product.category]
  }));

  await Product.insertMany(productsWithCategoryId);

  console.log('Seed complete');
  process.exit();
};

seed();
