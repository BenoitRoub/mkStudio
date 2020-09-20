const File = require("../models/fileModel");
const Folder = require("../models/folderModel");

const AWS = require("aws-sdk");
var s3 = new AWS.S3();

let FileController = {
  import: async function (req, res) {
    console.log(req.files);

    if (!req.files || req.files.file.mimetype !== "application/pdf") {
      res.sendStatus(405);
      return;
    }

    const folder = await Folder.findById(req.body.folderId);
    console.log("folder", folder);

    const file = await new File({
      userId: req.user.id,
      folderId: folder._id,
      name: req.body.name,
      createdAt: new Date(),
      imported: true,
    });

    let path = folder._id + "/pdf/" + file._id + ".pdf";

    var params = {
      Bucket: "soluo-avocats",
      Body: req.files.file.data,
      Key: path,
      ContentType: "application/pdf",
    };
    s3.putObject(params, function (err, data) {
      if (err) {
        throw err;
      }
      console.log(`File uploaded successfully.`);
    });

    file.pdfPath = path;
    file.dateUrlSigned = new Date();

    const pdfUrlSigned = s3.getSignedUrl("getObject", {
      Bucket: "soluo-avocats",
      Key: path,
      Expires: 60 * 5, // 300s
    });

    file.pdfUrlSigned = pdfUrlSigned;
    await file.save();

    folder.files.push(file._id);
    await folder.save();

    res.json(file);
  },
  delete: async (req, res) => {
    var file = await File.findById(req.body.fileId);

    console.log(file);

    if (req.body.type === "pdf" && file.pdfPath) {
      var params = { Bucket: "soluo-avocats", Key: file.pdfPath };
      s3.deleteObject(params, function (err, data) {
        if (err) console.log(err, err.stack);
        // error
        else console.log(); // deleted
      });

      file.pdfPath = undefined;
    }

    if (req.body.type === "doc" && file.docPath) {
      var params = { Bucket: "soluo-avocats", Key: file.docPath };
      s3.deleteObject(params, function (err, data) {
        if (err) console.log(err, err.stack);
        // error
        else console.log(); // deleted
      });
      file.docPath = undefined;
    }

    await file.save();

    if (!file.docPath && !file.pdfPath) {
      var folder = await Folder.findById(file.folderId);

      folder.files = folder.files.filter(
        (item) => item.toString() !== file._id.toString()
      );
      console.log(
        folder.files.filter((item) => item.toString() !== file._id.toString())
      );
      console.log(folder);
      await folder.save();

      await File.deleteOne({ _id: req.body.fileId });
    }

    res.sendStatus(200);
  },
};

module.exports = FileController;
