var express = require("express");

var folderController = require("../controllers/FolderController");

var router = express.Router();

router.post("/create", folderController.create);

router.post("/get", folderController.getFolder);

router.post("/generateDoc", folderController.generateDoc);

module.exports = router;
