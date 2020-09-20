const express = require("express");
const app = express();
const mongoose = require("mongoose");

var cors = require("cors");

app.use(cors());

require("dotenv").config();

mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to db")
);

const fileUpload = require("express-fileupload");
app.use(fileUpload());

const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
  signatureVersion: "v4",
});
const s3 = new AWS.S3();
s3.headBucket(
  {
    Bucket: "soluo-avocats",
  },
  function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log("connected to s3"); // successful response
  }
);

const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());

app.use("/", (req, res, next) => {
  // console.log(req.body);
  next();
});

const auth = require("./authentication/authenticate");
app.use(auth);

app.locals.isAuthenticated = (req, res, next) => {
  if (req.path !== "/user/login" && req.path !== "/user/signup") {
    if (req.user) {
      next();
      return;
    }
    res.sendStatus(401);
    return;
  } else next();
};

app.use(app.locals.isAuthenticated);

var user = require("./routes/userRoutes");
app.use("/user", user);

var folder = require("./routes/folderRoutes");
app.use("/folder", folder);

var file = require("./routes/fileRoutes");
app.use("/file", file);

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log("Example app listening on port " + port + "!");
});

// var generateDoc = require("./fileGenerator/divorcedDoc");
// var generatePdf = require("./fileGenerator/divorcedPdf");
// generatePdf.generateAnnexePdf({
//   client: {
//     gender: "Monsieur",
//     firstname: "Benoit",
//     lastname: "Roubaud",
//     birthname: "De Menegen",
//   },
// });
// generatePdf.generateDoc();
// generateDoc();
