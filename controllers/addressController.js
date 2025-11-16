const Address = require('../models/address.model');

const getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json({ success: true, data: { addresses } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching addresses', error: error.message });
  }
};

const addAddress = async (req, res) => {
  try {
    const address = await Address.create(req.body);
    res.status(201).json({ success: true, data: { address } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding address', error: error.message });
  }
};

const updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await Address.findByIdAndUpdate(id, req.body, { new: true });
    if (!address) return res.status(404).json({ success: false, message: 'Address not found' });
    res.status(200).json({ success: true, data: { address } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating address', error: error.message });
  }
};

const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await Address.findByIdAndDelete(id);
    if (!address) return res.status(404).json({ success: false, message: 'Address not found' });
    res.status(200).json({ success: true, message: 'Address deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting address', error: error.message });
  }
};

module.exports = { getAddresses, addAddress, updateAddress, deleteAddress };
