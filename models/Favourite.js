const mongoose = require("mongoose");
const { Schema } = mongoose;

const FavSchema = new Schema(
  {
    postId: {
      type: String,
      require: true,
      ref: "posts",
    },
    user: {
      type: String,
      required: true,
      ref: "users",
    },
    cateId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    cateName: {
      type: String,
      required: true,
    },
    files: {
      type: String,
      default: "",
      require: true,
    },
  },
  { timestamps: true }
);

const FavModel = mongoose.model("favourites", FavSchema);
module.exports = FavModel;
