var mongoose = require("mongoose");

var ProjectsSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true },
    title: { type: String },
    category: { type: String,enum: ["Property Updates", "project"], default: "Property Updates" },
    description: { type: String, },
    user_id: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    asset_id: {type: mongoose.Schema.ObjectId, ref: "Assets", required: true},
    startDate: { type: Date },
    expectedEndDate: { type: Date },
    actualEndDate: { type: Date },
    status: {type: String,enum: ["open", "inprogress", "closed","rejected"], default: "open"},
    estimated_exp: { type: String },
    actual_exp: { type: String },
    lm_id:{ type: String },
    lm_name: { type: String },
    lm_phno: { type: String },
    paymentStatus: {type: String,enum: ["not paid", "paid", "due"], default: "not paid"},
    planExpiry: { type: Date},
    subscriptionPlan: { type: Boolean},
  },
  { timestamps: true }
);


module.exports = mongoose.model("Projects", ProjectsSchema);
