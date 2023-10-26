const {nanoid} = require('nanoid');
const Asset = require('../models/AssetModel'); // Import your Asset model
const User = require('../models/UserModel'); // Import your Asset model
const Project = require('../models/ProjectModel'); // Import your Asset model
const Notif = require("../models/NotifModel");
const Comments = require("../models/CommentsModel");

async function createProjectRequest(req, res) {
    try {
      const user = req.user;
  
      const data = new Project({
        uid: nanoid(5),
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        user_id: user._id, // Use user._id to link the project to the user
        asset_id: req.body.assetID,
        startDate: Date.now(),
      });
  
      await data.save();
  
      // Update the asset to include the new project
      await Asset.findByIdAndUpdate(req.body.assetID, {
        $push: { projects: data._id },
      });
  
      const newNotif = new Notif({
        proj_id: data._id,
        proj_title: req.body.title,
        category: "request",
        sender: req.body.sender,
      });
  
      await newNotif.save();
  
      return res.status(200).json({
        success: true,
        message: "Project Successfully Created",
        data,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
}

async function getProjects(req, res) {
    try {
      const user = req.user;
      const { id } = req.query;
  
      if (id) {
        // If an ID is provided, return the specific project
        const project = await Project.findOne({
          _id: id,
          user_id: user._id, // Make sure the project belongs to the user
        });
  
        if (!project) {
          return res.status(404).json({
            success: false,
            message: "Project not found",
          });
        }
  
        return res.status(200).json({
          success: true,
          message: "Project retrieved successfully",
          project,
        });
      } else {
        // Return all projects for the user
        const projects = await Project.find({
          user_id: user._id,
        });
  
        return res.status(200).json({
          success: true,
          message: "Data retrieved successfully",
          projects,
        });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
  
  async function closeProject(req, res) {
    try {
      const user = req.user;
      const { id } = req.body; // You can retrieve the project ID from the request body or query parameters, adjust as needed
  
      // Check if the project exists and belongs to the user
      const project = await Project.findOne({
        _id: id,
        user_id: user._id,
      });
  
      if (!project) {
        return res.status(404).json({
          success: false,
          message: "Project not found",
        });
      }
  
      // Update the project status to "closed"
      project.status = "closed";
      await project.save();
  
      return res.status(200).json({
        success: true,
        message: "Project closed successfully",
        project,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

  async function getSpecificProject(req, res) {
    try {
      const project_id = req.body.project_id; // Retrieve the project ID from the request body
  
      // Find the project by ID
      const project = await Projects.findOne({ _id: project_id });
  
      if (!project) {
        return res.status(404).json({
          success: false,
          message: "Project not found",
        });
      }
  
      // Find comments associated with the project and sort them by created_at in descending order
      const comments = await Comments.find({ proj_id: project_id }).sort({
        created_at: -1,
      });
  
      return res.status(200).json({
        success: true,
        message: "Data retrieved successfully",
        project,
        comments,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
  
  async function getProjectRequests(req, res) {
    try {
      const projects = await Project.find({ status: "open" })
        .sort({ createdAt: -1 })
        .exec();
  
      return res.status(200).json({
        success: true,
        message: "Data retrieved successfully",
        count: projects.length,
        projects,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

  async function assignLM(req, res) {
    try {
      const { lm_id, lm_name, lm_phno, proj_id } = req.body;
  
      const updatedProject = await Project.findByIdAndUpdate(
        proj_id,
        { lm_id, lm_name, lm_phno },
        { new: true, runValidators: true }
      );
  
      if (!updatedProject) {
        return res.status(404).json({
          success: false,
          message: "Project not found",
        });
      }
  
      const user_id = updatedProject.user_id;
      const title = "Landmanager Assigned";
      const body = "Hello Land Owner, a Landmanager has been assigned to you. Click to view.";
      const imgUrl = "";
  
      const token = await User.findById(user_id).select('notifToken');
  
      if (!token) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
  
      const result = await sendNotif([token.notifToken], title, body, imgUrl);
  
      return res.status(200).json({
        success: true,
        message: "Successfully updated",
        projects: updatedProject,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
  
  
module.exports = {
    createProjectRequest,
    getProjects,
    closeProject,
    getSpecificProject,
    getProjectRequests,
    assignLM
}