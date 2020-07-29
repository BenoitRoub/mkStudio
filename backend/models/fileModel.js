const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    folderId: mongoose.Schema.Types.ObjectId,
    name: String,
    pdfUrl: String,
    docUrl: String
})

module.exports = mongoose.model('File', fileSchema)