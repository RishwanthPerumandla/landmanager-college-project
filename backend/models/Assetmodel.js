var mongoose = require("mongoose");

var AssetSchema = new mongoose.Schema(
  {
    name: { type: String, },
    description: { type: String, },
    location: {
      city: { type: String, },
      district: { type: String, },
      pincode: { type: String, },
      surveycode: { type: String, },
      landmarks: { type: String },
      locationLink: { type: String },
    },
    user_id: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    // lm_id: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    // lm_name: { type: String },
    // lm_phno: { type: String },
    media: [{ type: String }],
    projects:[{ type: mongoose.Schema.ObjectId, ref: "Projects",}],
    subscriptionPlan: { type: Boolean, default: false},
    planExpiry: { type: Date},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assets", AssetSchema);
