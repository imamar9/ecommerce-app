const Cart = require('../models/cart.model');

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne();
    res.status(200).json({ success: true, data: { cart } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching cart', error: error.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    let cart = await Cart.findOne();
    if (!cart) cart = await Cart.create({ items: [] });
    let existing = cart.items.find(item => item.productId.toString() === productId);
    if (existing) {
      existing.quantity += quantity || 1;
    } else {
      cart.items.push({ productId, quantity: quantity || 1, price: req.body.price, total: req.body.price });
    }
    await cart.save();
    res.status(200).json({ success: true, data: { cart } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding to cart', error: error.message });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;
    const cart = await Cart.findOne();
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });
    let item = cart.items.find(i => i.productId.toString() === productId);
    if (item) item.quantity = quantity;
    await cart.save();
    res.status(200).json({ success: true, data: { cart } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating cart', error: error.message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const cart = await Cart.findOne();
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });
    cart.items = cart.items.filter(item => item.productId.toString() !== productId);
    await cart.save();
    res.status(200).json({ success: true, data: { cart } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error removing from cart', error: error.message });
  }
};

module.exports = { getCart, addToCart, updateCartItem, removeFromCart };
