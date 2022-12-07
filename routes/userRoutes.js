const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  getDetail,
  updateUser,
  getAlluser,
  verifyMail,
  verifiedPage,
} = require("../controllers/userController");
// const { upload, profileImgs } = require("./imageRoute");
const { uploadprofile } = require("./multerFile");
const { protect } = require("../middleware/authMiddleware");
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.get("/verify/:userId/:uniqueString", verifyMail);
router.get("/verifyed", verifiedPage);
router.get("/alluser", getAlluser);
router.get("/detail/:id", getDetail);
router.put("/update/:id", protect, uploadprofile, updateUser);
module.exports = router;
