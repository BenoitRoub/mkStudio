const mongoose = require('mongoose')

const folderSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    name: String,  
    files: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "File"
        }
    ]  
})

module.exports = mongoose.model('Folder', folderSchema)