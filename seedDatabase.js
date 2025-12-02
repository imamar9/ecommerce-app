const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('./models/product.model');
const Category = require('./models/category.model');
const Wishlist = require('./models/wishlist.model');
const Cart = require('./models/cart.model');
const Address = require('./models/address.model');

const products = require('./data/products');
const categories = require('./data/categories');

const wishlistSeed = [
  { items: [] }
];

const cartSeed = [
  { items: [] }
];

const addressSeed = [
  {
    name: "Test User",
    mobile: "1234567890",
    pincode: "123456",
    address: "123 Main Street",
    city: "Metropolis",
    state: "CA",
    isDefault: true
  }
];

const MONGODB = process.env.MONGODB;

const seed = async () => {
  await mongoose.connect(MONGODB);
  const existingCollections = (await mongoose.connection.db.listCollections().toArray()).map(col => col.name);

  let insertedCategories = [];
  if (!existingCollections.includes('categories')) {
    insertedCategories = await Category.insertMany(categories);
    console.log('Seeded categories collection');
  } else {
    insertedCategories = await Category.find();
    console.log('Categories collection already exists, skipping seed.');
  }

  const catMap = {};
  insertedCategories.forEach(cat => { catMap[cat.name] = cat._id; });
  const productsWithCategoryId = products.map(product => ({
    ...product,
    categoryId: catMap[product.category]
  }));

  let insertedProducts = [];
  if (!existingCollections.includes('products')) {
    insertedProducts = await Product.insertMany(productsWithCategoryId);
    console.log('Seeded products collection');
  } else {
    insertedProducts = await Product.find();
    console.log('Products collection already exists, skipping seed.');
  }

  if (insertedProducts.length > 0) {
    wishlistSeed[0].items.push(insertedProducts[0]._id);
    cartSeed[0].items.push({
      productId: insertedProducts[0]._id,
      quantity: 1,
      price: insertedProducts[0].price,
      total: insertedProducts[0].price
    });
  }

  if (!existingCollections.includes('wishlists')) {
    await Wishlist.insertMany(wishlistSeed);
    console.log('Seeded wishlists collection');
  } else {
    console.log('Wishlists collection already exists, skipping seed.');
  }

  if (!existingCollections.includes('carts')) {
    await Cart.insertMany(cartSeed);
    console.log('Seeded carts collection');
  } else {
    console.log('Carts collection already exists, skipping seed.');
  }

  if (!existingCollections.includes('addresses')) {
    await Address.insertMany(addressSeed);
    console.log('Seeded addresses collection');
  } else {
    console.log('Addresses collection already exists, skipping seed.');
  }

  console.log('Seed complete');
  process.exit();
};

seed();
