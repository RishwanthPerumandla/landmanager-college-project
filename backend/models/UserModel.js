var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    phoneno: { type: String },
    email: { type: String, required: false },
    password: { type: String, required: false },
    role: { type: String, enum: ["CSM", "MOD", "ADM", "LM"], default: "CSM" },
    subscriptionPlan: { type: String, default: "trial", enum: ["trial", "basic", "EMP"]},
    profileImg: { type: String },
    assets: [{ type: mongoose.Schema.ObjectId, ref: "Assets" }],
    notifToken: {type: String,required: false},
    newUser: {type: Boolean,required: false}, 
    location :{type:String},
    refreshToken: {type: String,required: false},
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);