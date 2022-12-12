"use strict";

const express = require("express");
const {
  createFavItem,
  getFavItem,
  deleteFavItem,
  postFavNumber,
  checkFavorited,
} = require("../controllers/favController");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
//Post and Get with one sentence
router.post("/addFav", protect, createFavItem);

//get favall post by user
router.post("/getFavposts", protect, getFavItem);

router.post("/favoriteNumber", protect, postFavNumber);
router.post("/checked", protect, checkFavorited);
//Delete favourite
router.post("/removeFav", protect, deleteFavItem);
module.exports = {
  routes: router,
};
