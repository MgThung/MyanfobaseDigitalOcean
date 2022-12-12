const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const { S3_ENDPOINT, BUCKET_NAME } = process.env;
console.log("image file are", S3_ENDPOINT, BUCKET_NAME);

const spacesEndpoint = new aws.Endpoint(S3_ENDPOINT);
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
});

const storageposts = multerS3({
  s3,
  dirname: "/",
  bucket: `${BUCKET_NAME}/uploads`,
  acl: "public-read",
  limits: { fileSize: 1024 * 1024 * 5 }, //  allowed only 5 MB files
  metadata: (req, file, cb) => {
    cb(null, {
      fieldname: file.fieldname,
    });
  },
  key: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const storageprofile = multerS3({
  s3,
  dirname: "/",
  bucket: `${BUCKET_NAME}/uploadProfile`,
  acl: "public-read",
  limits: { fileSize: 1024 * 1024 * 5 }, //  allowed only 5 MB files
  metadata: (req, file, cb) => {
    cb(null, {
      fieldname: file.fieldname,
    });
  },
  key: (req, file, cb) => {
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
    cb(
      new Error("Invalid file type, only JPEG, JPG and PNG is allowed!"),
      false
    );
  }
};
const upload = multer({
  storage: storageposts,
  fileFilter: filefilter,
}).array("files");
const uploadprofile = multer({
  storage: storageprofile,
  fileFilter: filefilter,
}).single("files");
module.exports = { upload, s3, uploadprofile };
