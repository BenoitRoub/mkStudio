const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    password: String,  
    folders: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Folder"
        }
    ]  
})

  
  

module.exports = mongoose.model('User', userSchema)