var mongoose = require("mongoose");
var CommentsSchema = new mongoose.Schema({
    content: { 
        text: {type: String},
        media: [{ type: String }],
    },
    proj_id: {type: mongoose.Schema.ObjectId, ref: "Projects"},
    sender: { type: String, enum: ["CSM", "ADM", "MOD", "LM"], default: "CSM"},
    created_at:  {type: Date, default: Date.now},
});
module.exports = mongoose.model("Comments", CommentsSchema);
