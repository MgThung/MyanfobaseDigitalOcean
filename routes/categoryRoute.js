const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const { protect } = require("../middleware/authMiddleware");
router.post("/", protect, createCategory);
router.get("/", getCategory);
// router.delete("/:id", protect, deleteCategory);
router.post("/delCate", protect, deleteCategory);
module.exports = router;
