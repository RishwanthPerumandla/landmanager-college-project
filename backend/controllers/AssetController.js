const Asset = require('../models/AssetModel'); // Import your Asset model

const AssetController = {
  getAssetsbyUser: async (req, res) => {
    const { id } = req.query;

    try {
      if (id) {
        const asset = await Asset.findOne({ _id: id, user_id: req.user._id });

        if (!asset) {
          return res.status(404).json({ success: false, message: 'Asset not found' });
        }

        return res.status(200).json({ success: true, message: 'Asset retrieved successfully', data: asset });
      } else {
        const assets = await Asset.find({ user_id: req.user._id });
        return res.status(200).json({ success: true, message: 'Assets retrieved successfully', data: assets });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  },

  // Add new asset
  addAssets: async (req, res) => {
    const assetData = req.body;
    assetData.user_id = req.user._id; // Set the user ID based on the authenticated user

    try {
      const newAsset = new Asset(assetData);
      await newAsset.save();
      return res.status(201).json({ success: true, message: 'Asset added successfully', data: newAsset });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  },

  // Update asset
  updateAsset: async (req, res) => {
    const { id } = req.body;
    const assetData = req.body;
    delete assetData._id; // Remove _id from the request body

    try {
      const updatedAsset = await Asset.findOneAndUpdate(
        { _id: id, user_id: req.user._id },
        assetData,
        { new: true }
      );

      if (!updatedAsset) {
        return res.status(404).json({ success: false, message: 'Asset not found' });
      }

      return res.status(200).json({ success: true, message: 'Asset updated successfully', data: updatedAsset });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  },

  // Remove asset
  removeAsset: async (req, res) => {
    const { id } = req.query;

    try {
      const deletedAsset = await Asset.findOneAndRemove({ _id: id, user_id: req.user._id });

      if (!deletedAsset) {
        return res.status(404).json({ success: false, message: 'Asset not found' });
      }

      return res.status(200).json({ success: true, message: 'Asset removed successfully' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  },
};

module.exports = AssetController;
