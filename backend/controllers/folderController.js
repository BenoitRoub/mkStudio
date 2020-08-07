const User = require("../models/userModel");
const Folder = require("../models/folderModel");
const File = require("../models/fileModel");
var generatePdf = require(".././fileGenerator/divorcedPdf");
var generateDoc = require(".././fileGenerator/divorcedDoc");

let FolderController = {
  create: async function (req, res) {
    const folder = await new Folder({
      name: req.body.folderName,
      userId: req.user.id,
      createdAt: new Date(),
      lastUpdateAt: new Date(),
    });

    await folder.save();

    const user = await User.findById(req.user.id);
    user.folders.push(folder._id);
    await user.save();

    //await generateFile(req, res, folder);

    res.json(folder);
  },
  generateDoc: async function (req, res) {
    var folder = await Folder.findById(req.body.folderId);

    if (!folder) {
      res.sendStatus(405);
      return;
    }

    if (req.body.form) {
      folder.form = req.body.form;
    }

    let buffer = await generateDoc({ form: req.body.form });

    // let buffer = await Packer.toBuffer(doc);
    // if (!Buffer.isBuffer(buffer)) {
    //   buffer = Buffer.from(buffer);
    // }

    const fileDoc = await registerFile(req, res, folder, buffer);

    /** DELETE all previous generated Files */
    if (folder.files) {
      const filesToDelete = folder.files.filter((file) => !file.imported);
      await Promise.all(
        filesToDelete.map(async (file) => {
          await File.deleteOne({ _id: file });
        })
      );
      folder.files = folder.files.filter((file) => file.imported);
    } else {
      folder.files = [];
    }

    folder.files.push(fileDoc._id);

    // let pdf = generatePdf.generatePdf({ form: req.body.form });

    // let buffer = await Packer.toBuffer(doc);
    // if (!Buffer.isBuffer(buffer)) {
    //   buffer = Buffer.from(buffer);
    // }

    // const pdfFile = await registerFile(req, res, folder, buffer);

    // folder.files.push(pdfFile._id);

    await folder.save();

    const responseFolder = await Folder.findById(req.body.folderId).populate(
      "files"
    );
    res.json(responseFolder);
  },
  getFolder: async function (req, res) {
    const folder = await Folder.findById(req.body.id);

    await Promise.all(
      folder.files.map(async (file) => {
        let foundFile = await File.findById(file);

        if (new Date().getTime() - foundFile.dateUrlSigned.getTime() > 59 * 5) {
          const pdfUrlSigned = foundFile.pdfPath
            ? s3.getSignedUrl("getObject", {
                Bucket: "soluo-avocats",
                Key: foundFile.pdfPath,
                Expires: 60 * 5, // 300s
              })
            : null;

          const docUrlSigned = foundFile.docPath
            ? s3.getSignedUrl("getObject", {
                Bucket: "soluo-avocats",
                Key: foundFile.docPath,
                Expires: 60 * 5, // 300s
              })
            : undefined;

          foundFile.dateUrlSigned = new Date();
          foundFile.docUrlSigned = docUrlSigned;
          foundFile.pdfUrlSigned = pdfUrlSigned;

          await foundFile.save();
        }
      })
    );

    if (!folder) {
      res.sendStatus(405);
      return;
    }

    if (folder.userId.toString() !== req.user.id.toString()) {
      res.sendStatus(401);
      return;
    }

    let responseFolder = await Folder.findById(req.body.id).populate("files");

    res.json(responseFolder);
  },
};

const docx = require("docx");
const fs = require("fs");

const AWS = require("aws-sdk");
var s3 = new AWS.S3();

const { Document, Packer, Paragraph, TextRun } = docx;

async function registerFile(req, res, folder, buffer) {
  const file = await new File({
    userId: req.user.id,
    folderId: folder._id,
    name: "Convention de divorce par consentement mutuelle",
    createdAt: new Date(),
    imported: false,
  });

  var params = {
    Bucket: "soluo-avocats",
    Body: buffer,
    Key: folder._id + "/doc/" + file._id + ".docx",
    ContentType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  };

  s3.putObject(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully.`);
  });

  file.dateUrlSigned = new Date();

  file.docPath = folder._id + "/doc/" + file._id + ".docx";

  const docUrlSigned = s3.getSignedUrl("getObject", {
    Bucket: "soluo-avocats",
    Key: folder._id + "/doc/" + file._id + ".docx",
    Expires: 60 * 5, // 300s
  });

  file.docUrlSigned = docUrlSigned;
  await file.save();

  return file;
}

module.exports = FolderController;
