const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserVerification = new Schema({
  userId: {
    type: String,
  },
  uniqueString: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  expiresAt: {
    type: Date,
  },
});
module.exports = mongoose.model("UserVerification", UserVerification);
