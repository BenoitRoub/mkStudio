var express = require("express");

const User = require("../models/userModel");

var userController = require("../controllers/userController");

var router = express.Router();

router.post("/", userController.find);

router.post("/login", userController.login);

router.post("/signup", userController.signup);

router.get("/personnal", userController.getPersonnalInformations);

router.post("/folders", userController.findFolders);

module.exports = router;
