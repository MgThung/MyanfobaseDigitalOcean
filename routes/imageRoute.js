"use strict";

let express = require("express");
let multer = require("multer");
let mongoose = require("mongoose");
let uuidv4 = require("uuid/v4");
let router = express.Router();

// const DIR = "../client/public/images/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const profileImg = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploadProfile");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const filefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: filefilter });
const profileImgs = multer({ storage: profileImg, fileFilter: filefilter });
module.exports = { upload, profileImgs };
