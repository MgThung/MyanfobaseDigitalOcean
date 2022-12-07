const mongoose = require("mongoose");
const { Schema } = mongoose;

const CateSchema = new Schema({
  _id: Number,
  catename: String,
  
});

const CateModel = mongoose.model("categories", CateSchema);

const CounterSchema = new Schema({
  _id: {
    type: String,
  },
  seq: {
    type: Number,
  },
});

const CounterModel = mongoose.model("counter", CounterSchema);
module.exports = {
  CateModel,
  CounterModel,
};
