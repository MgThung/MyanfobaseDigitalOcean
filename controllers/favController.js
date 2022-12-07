"use strict";
const FavModel = require("../models/Favourite");
const PostModel = require("../models/Posts");

const createFavItem = async (req, res, next) => {
  try {
    const favlist = new FavModel({
      postId: req.body._id,
      user: req.user.id,
      cateId: req.body.cateId,
      cateName: req.body.cateName,
      title: req.body.title,
      files: req.body.files,
    });

    favlist.save();

    res.status(201).json({ success: true, result: favlist }); //send(post)
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

const postFavNumber = async (req, res) => {
  // console.log("req body data id is", req.body._id);
  FavModel.find({ postId: req.body._id }).exec((err, favorite) => {
    if (err) return res.status(400).send(err);
    // res.status(200).send({ FavoriteNumber: favorite.length });
    res.status(200).json({ success: true, FavNumber: favorite.length });
  });
};

const checkFavorited = async (req, res) => {
  //Find Favorite Information inside Favorite Collection by _id,userId
  FavModel.find({ postId: req.body._id, user: req.user.id }).exec(
    (err, favorite) => {
      if (err) return res.status(400).send(err);

      //How can we know if I already favorite this movie or not?
      let result = false;
      if (favorite.length !== 0) {
        result = true;
      }
      res.status(200).json({ success: true, favorited: result });
    }
  );
};

//get Categorys
const getFavItem = async (req, res, next) => {
  try {
    const files = await FavModel.find({ user: req.user.id });
    res.status(200).json({ success: true, files });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteFavItem = async (req, res) => {
  FavModel.findOneAndDelete({ postId: req.body._id, user: req.body.user }).exec(
    (err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true, result });
    }
  );
};

module.exports = {
  createFavItem,
  getFavItem,
  deleteFavItem,
  postFavNumber,
  checkFavorited,
};
