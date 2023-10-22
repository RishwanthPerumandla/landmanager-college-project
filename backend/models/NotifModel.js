var mongoose = require("mongoose");
var NotifsSchema = new mongoose.Schema(
  {
    proj_id: { type: String },
    proj_title: { type: String },
    category: {type: String,  enum: ["message","request"], default: "message"},
    sender: { type: String, enum: ["CSM", "ADM", "MOD", "LM"], default: "CSM"},
    seen:{  type: Boolean, default: false }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Notifs", NotifsSchema);
