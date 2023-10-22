const {nanoid} = require('nanoid');
const Asset = require('../models/AssetModel'); // Import your Asset model
const User = require('../models/UserModel'); // Import your Asset model
const Project = require('../models/ProjectModel'); // Import your Asset model

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

      // Add the ID of the new asset to the user's assets array
      const updatedUser = await User.findByIdAndUpdate(
        req.user._id,
        { $push: { assets: newAsset._id } },
        { new: true }
      );    
      // Create a default project for the newly added asset
      const defaultProject = new Project({
        uid: nanoid(5), // Set a unique identifier for the default project
        title: 'Monthly Updates',
        description: `Regular Physical visits to the land.
                      Video of the Property Every Quarter
                      Montly market updates about surroundings
                      Developments around Surrounding Area`,
        user_id: req.user._id,
        asset_id: newAsset._id, // Link the project to the newly added asset
        startDate: Date.now()
        // Set other default project properties as needed
      });

      await defaultProject.save();

      // Add the new project's ID to the asset's projects array
      newAsset.projects.push(defaultProject._id); // Push the project ID to the projects array
      await newAsset.save(); // Save the updated asset     
      
      return res.status(201).json({ success: true, message: 'Asset added successfully', data: newAsset, defaultProject: defaultProject });
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
