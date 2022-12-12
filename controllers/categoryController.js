"use strict";
const { CateModel, CounterModel } = require("../models/Categories");

const createCategory = async (req, res, next) => {
  console.log("req. route data is", req.body);
  try {
    CounterModel.findOneAndUpdate(
      { _id: "autoval" },
      { $inc: { seq: 1 } },
      { new: true },
      (err, cd) => {
        let seqId;
        if (cd == null) {
          const newval = new CounterModel({ _id: "autoval", seq: 1 });
          newval.save();
          seqId = 1;
        } else {
          seqId = cd.seq;
        }

        const categories = new CateModel({
          _id: seqId,
          catename: req.body.catename,
        });
        categories.save();
        res.status(201).send(categories);
      }
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//get Categorys
const getCategory = async (req, res, next) => {
  try {
    const files = await CateModel.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//delete Category
// const deleteCategory = async (req, res) => {
//   const id = req.params.id;
//   console.log("id from delet", id);
//   // make sure the logged in user matches the posted user
//   if (req.user.isAdmin !== true) {
//     res.status(401);
//     throw new Error("User not autorized");
//   }
//   await CateModel.findByIdAndRemove(id).exec();
//   res.status(200).json({ id: id });
//   // res.send();
// };

const deleteCategory = async (req, res) => {
  CateModel.findOneAndDelete({
    _id: req.body._id,
  }).exec((err, result) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, id: result._id });
  });
};
module.exports = {
  createCategory,
  getCategory,
  deleteCategory,
};
