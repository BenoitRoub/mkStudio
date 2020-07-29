const User = require('../models/userModel')

const bcrypt = require('bcrypt')

const jsonwebtoken = require('jsonwebtoken')


let UserController = {
    signup: async function (req, res) {
        const user = await new User({
          email: req.body.email,
          password: await bcrypt.hash(req.body.password, 10),
        });
        user.save();

    
        res.json(jsonwebtoken.sign({ id: user.id }, "Benoit", {
          expiresIn: "1y",
        }))
      },
      login: async function (req, res) {
        var user = await User.findOne({
          email: req.body.email
        });
        if (!user) {
          throw new Error("No user with that email");
        }
        const valid = await bcrypt.compare(req.body.password, user.password);
        if (!valid) {
          throw new Error("Incorrect password");
        }
    
       
        res.json(jsonwebtoken.sign(
          { id: user.id },
          "Benoit", {
            expiresIn: "1y",
          }
        ))
      },
    find: async (req, res) => {
        let found = await User.findOne({_id: req.body.id})
        res.json("found")
    },
    delete: async (req,res) => {
        let deleted = await User.deleteOne({_id: req.body.id})
        res.json(deleted)
    },
    findFolders: async (req, res) => {
        let foundUser = await User.findOne({_id: req.body.id}).populate("folders")
        res.json(foundUser.folders)
    }
}

module.exports = UserController 