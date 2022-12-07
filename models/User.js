const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a name"],
      min: [3, "username must be at least 3 words"],
      max: 20,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      max: 40,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      min: [7, "please use strong password"],
    },
    verified: {
      type: Boolean,
    },
    login: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    googleId: String,
    dob: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    address: {
      type: Object,
      default: "",
      max: 50,
    },
    bio: {
      type: String,
      default: "",
      max: 50,
    },
    profilePicture: {
      type: [Object],
      default: [""],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("users", userSchema);
