const Wishlist = require('../models/wishlist.model');

const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne();
    res.status(200).json({ success: true, data: { wishlist } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching wishlist', error: error.message });
  }
};

const addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;
    let wishlist = await Wishlist.findOne();
    if (!wishlist) wishlist = await Wishlist.create({ items: [] });
    if (!wishlist.items.includes(productId)) wishlist.items.push(productId);
    await wishlist.save();
    res.status(200).json({ success: true, data: { wishlist } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding to wishlist', error: error.message });
  }
};

const removeFromWishlist = async (req, res) => {
  try {
    const { productId } = req.params;
    const wishlist = await Wishlist.findOne();
    if (!wishlist) return res.status(404).json({ success: false, message: 'Wishlist not found' });
    wishlist.items = wishlist.items.filter(item => item.toString() !== productId);
    await wishlist.save();
    res.status(200).json({ success: true, data: { wishlist } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error removing from wishlist', error: error.message });
  }
};

module.exports = { getWishlist, addToWishlist, removeFromWishlist };
