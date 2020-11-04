var express = require("express");

var folderController = require("../controllers/folderController");

var router = express.Router();

router.post("/create", folderController.create);

router.post("/delete", folderController.delete);

router.post("/get", folderController.getFolder);

router.post("/saveForm", folderController.saveForm);

router.post("/generateDoc", folderController.generateDoc);

module.exports = router;
