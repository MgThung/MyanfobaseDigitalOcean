const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    username: {
      type: mongoose.Schema.Types.String,
      require: true,
      default: "",
      ref: "users",
    },
    userprofile: {
      type: mongoose.Schema.Types.String,
      require: true,

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
    description: {
      type: String,
      required: true,
    },
    cateName: {
      type: String,
      required: true,
    },
    timeCreated: {
      type: Date,
      default: () => Date.now(),
    },
    postAccept: {
      type: Boolean,
      default: false,
    },
    files: {
      type: [Object],
      required: true,
    },
    viewcount: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("posts", PostSchema);
module.exports = PostModel;
