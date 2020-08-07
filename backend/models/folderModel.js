const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: String,
  files: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File",
    },
  ],
  createdAt: Date,
  lastUpdateAt: Date,
  form: {},
});

module.exports = mongoose.model("Folder", folderSchema);
