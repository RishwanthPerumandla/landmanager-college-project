const User = require("../models/UserModel");

async function getUserDetails(req, res) {
  try {
    const user = req.user;
    const data = await User.find({_id: user.id});

    return res.status(200).json({
      success: true,
      message: "User Data retrieved successfully",
      data,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

async function updateUserDetails(req, res) {
  try {
    const user = req.user;
    const data = await User.findOneAndUpdate({
      _id: user.id,
    }, req.body,{
      new:true,
      runValidators:true
  });

    return res.status(200).json({
      success: true,
      message: "User Data Updated successfully",
      data,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  getUserDetails,
  updateUserDetails
};
