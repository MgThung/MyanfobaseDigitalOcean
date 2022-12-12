"use strict";

const express = require("express");
// const { upload } = require("./imageRoute");
const { upload } = require("./multerFile");
const {
  multipleFileUpload,
  getposts,
  updatepost,
  deletepost,
  postdetail,
  updAdminAccept,
  getcatename,
  getLastPosts,
  getCateCount,
  getViewCount,
} = require("../controllers/fileuploaderController");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
//Post and Get with one sentence
router
  .route("/post")
  // .get(protect, getposts)
  .get(getposts)
  .post(protect, upload, multipleFileUpload);

//Update and Delete
router
  .route("/post/:id")
  .get(protect, postdetail)
  .put(protect, upload, updatepost)
  .delete(protect, deletepost);
//update admin accept
router.put("/post/admin/:id", protect, upload, updAdminAccept);
router.get("/postcate/:cate", getcatename);
router.get("/lastposts", getLastPosts);
router.get("/catecount", getCateCount);
router.get("/popular", getViewCount);
// router.post("/post", upload.array("files"), multipleFileUpload);
// router.get("/post", getposts);
// router.get("/postdetail/:id", postdetail);
// router.put("/post/:id", upload.array("files"), updatepost);
// router.delete("/post/:id", deletepost);

module.exports = {
  routes: router,
};
