const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  folderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Folder",
  },
  name: String,
  pdfPath: String,
  docPath: String,
  docUrlSigned: String,
  pdfUrlSigned: String,
  dateUrlSigned: Date,
  createdAt: Date,
  imported: Boolean,
});

module.exports = mongoose.model("File", fileSchema);
