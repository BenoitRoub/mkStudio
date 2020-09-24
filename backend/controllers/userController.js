const User = require("../models/userModel");

const bcrypt = require("bcrypt");

const jsonwebtoken = require("jsonwebtoken");

let UserController = {
  signup: async function (req, res) {
    const user = await new User({
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });
    user.save();

    res.json(
      jsonwebtoken.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1y",
      })
    );
  },
  login: async function (req, res) {
    if (
      !req.body.email ||
      req.body.email === "" ||
      !req.body.password ||
      req.body.password === ""
    ) {
      res.sendStatus(402);
      return;
    }

    var user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      res.sendStatus(402);
      return;
    }

    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      res.sendStatus(402);
      return;
    }
    res.json(
      jsonwebtoken.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1y",
      })
    );
  },
  getPersonnalInformations: async (req, res) => {
    var user = await User.findById(req.user.id, {
      _v: 0,
      password: 0,
    }).populate("folders");
    res.json(user);
  },
  find: async (req, res) => {
    let found = await User.findOne();
    res.json(found);
  },
  delete: async (req, res) => {
    let deleted = await User.deleteOne({ _id: req.body.id });
    res.json(deleted);
  },
  findFolders: async (req, res) => {
    let foundUser = await User.findOne({ _id: req.body.id }).populate(
      "folders"
    );
    res.json(foundUser.folders);
  },
};

module.exports = UserController;
