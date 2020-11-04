const User = require("../models/userModel");
const Folder = require("../models/folderModel");
const File = require("../models/fileModel");
var generatePdf = require(".././fileGenerator/divorcedPdf");
var generateDoc = require(".././fileGenerator/divorcedDoc");
require("dotenv").config();

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

    res.json(folder);
  },
  delete:  async function (req, res) {   

    await Folder.deleteOne({_id: req.body.folderId})

    let user = await User.findById(req.user.id);


    user.folders = user.folders.filter(folder => folder.toString() !== req.body.folderId.toString())

    await user.save()
    
    user =  await User.findById(req.user.id).populate(
      "folders"
    );

    res.json(user.folders);
  },
  saveForm: async function (req, res) {
    const folder = await Folder.findById(req.body.id);

    folder.form = req.body.form;

    await folder.save();

    res.json(folder);
  },
  generateDoc: async function (req, res) {
    var folder = await Folder.findById(req.body.folderId);

    if (req.body.form) {
      folder.form = req.body.form;
    }
    if (!folder) {
      res.sendStatus(405);
      return;
    }

    const form = req.body.form || folder.form;

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

    let docBuffer = await generateDoc({ form });
    const fileDoc = await registerFile(
      req,
      res,
      folder,
      docBuffer,
      "doc",
      "Convention de divorce par consentement mutuelle"
    );

    let pdfBuffer = await generatePdf.generatePdf({ form });
    const pdfFile = await registerFile(
      req,
      res,
      folder,
      pdfBuffer,
      "pdf",
      "Convention de divorce par consentement mutuelle"
    );

    let pdfHusbandFirstAnnexBuffer = await generatePdf.generateFirstAnnexePdf({
      form,
      client: form.first,
      isMen: true,
    });
    const pdfHusbandFirstAnnexFile = await registerFile(
      req,
      res,
      folder,
      pdfHusbandFirstAnnexBuffer,
      "pdf",
      `Annexe convention de divorce ${form.first.lastname} ${form.first.firstname}`
    );

    let pdfWifeFirstAnnexBuffer = await generatePdf.generateFirstAnnexePdf({
      form,
      client: form.second,
      isMen: false,
    });
    const pdfWifeFirstAnnexFile = await registerFile(
      req,
      res,
      folder,
      pdfWifeFirstAnnexBuffer,
      "pdf",
      `Annexe convention de divorce ${form.second.lastname} ${form.second.firstname}`
    );

    let pdfSecondAnnexBuffer = await generatePdf.generateSecondAnnexePdf({
      form,
    });
    const pdfSecondAnnexFile = await registerFile(
      req,
      res,
      folder,
      pdfSecondAnnexBuffer,
      "pdf",
      `Annexe convention de divorce Mairie`
    );

    let pdfHusbandThirdAnnexBuffer = await generatePdf.generateThirdAnnexePdf({
      form,
      client: form.first,
      isMen: true,
    });
    const pdfHusbandThirdAnnexFile = await registerFile(
      req,
      res,
      folder,
      pdfHusbandThirdAnnexBuffer,
      "pdf",
      `Attestation de divorce ${form.first.lastname} ${form.first.firstname}`
    );

    let pdfWifeThirdAnnexBuffer = await generatePdf.generateThirdAnnexePdf({
      form,
      client: form.second,
      isMen: false,
    });
    const pdfWifeThirdAnnexFile = await registerFile(
      req,
      res,
      folder,
      pdfWifeThirdAnnexBuffer,
      "pdf",
      `Attestation de divorce ${form.second.lastname} ${form.second.firstname}`
    );

    // folder.files.push(fileDoc._id);
    folder.files.push(pdfFile._id);
    folder.files.push(pdfHusbandFirstAnnexFile._id);
    folder.files.push(pdfWifeFirstAnnexFile._id);
    folder.files.push(pdfSecondAnnexFile._id);
    folder.files.push(pdfHusbandThirdAnnexFile._id);
    folder.files.push(pdfWifeThirdAnnexFile._id);

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
                Bucket: process.env.s3BucketName,
                Key: foundFile.pdfPath,
                Expires: 60 * 5, // 300s
              })
            : null;

          const docUrlSigned = foundFile.docPath
            ? s3.getSignedUrl("getObject", {
                Bucket: process.env.s3BucketName,
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

async function registerFile(req, res, folder, buffer, type, name) {
  const file = await new File({
    userId: req.user.id,
    folderId: folder._id,
    name: name,
    createdAt: new Date(),
    imported: false,
  });

  var params = {};
  if (type === "pdf") {
    params = {
      Bucket: process.env.s3BucketName,
      Body: buffer,
      Key: folder._id + "/pdf/" + file._id + ".pdf",
      ContentType: "application/pdf",
    };
  } else {
    params = {
      Bucket: process.env.s3BucketName,
      Body: buffer,
      Key: folder._id + "/doc/" + file._id + ".docx",
      ContentType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    };
  }

  s3.putObject(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully.`);
  });

  file.dateUrlSigned = new Date();

  if (type === "doc") {
    file.docPath = folder._id + "/doc/" + file._id + ".docx";

    const docUrlSigned = s3.getSignedUrl("getObject", {
      Bucket: process.env.s3BucketName,
      Key: folder._id + "/doc/" + file._id + ".docx",
      Expires: 60 * 5, // 300s
    });

    file.docUrlSigned = docUrlSigned;
  } else {
    file.pdfPath = folder._id + "/pdf/" + file._id + ".pdf";

    const pdfUrlSigned = s3.getSignedUrl("getObject", {
      Bucket: process.env.s3BucketName,
      Key: folder._id + "/pdf/" + file._id + ".pdf",
      Expires: 60 * 5, // 300s
    });
    file.pdfUrlSigned = pdfUrlSigned;
  }

  await file.save();

  return file;
}

module.exports = FolderController;
