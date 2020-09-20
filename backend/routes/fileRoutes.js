var express = require("express");

var fileController = require("../controllers/fileController");

var router = express.Router();

router.post("/import", fileController.import);

router.post("/delete", fileController.delete);

module.exports = router;
