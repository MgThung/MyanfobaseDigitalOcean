const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");
require("./models/User");
const PostModel = require("./models/Posts");
const { CateModel, CounterModel } = require("./models/Categories");
const bodyParser = require("body-parser");
require("./services/passport");
require("dotenv").config();
const path = require("path");
const fileRoutes = require("./routes/file-upload-route");
const favRoutes = require("./routes/fovouriteRoute");

const app = express();

//database connection
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  // useFindAndModify: false,
}); //

// fileRoutes(app);
app.use(express.static(path.join(__dirname, "/client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build/static/index.html"));
// });

app.use(cors());
app.use(express.json()); // to get data with json format
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); //without this,postman can't read urlencoded
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(
  "/uploadProfile",
  express.static(path.join(__dirname, "uploadProfile"))
);
app.use("/api", fileRoutes.routes, favRoutes.routes);
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/category", require("./routes/categoryRoute"));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

app.get("/detailwithview/:id", async (req, res) => {
  const id = req.params.id;
  PostModel.findOneAndUpdate(
    { _id: id },
    { $inc: { viewcount: 0.5 } },
    { new: true }
  ).exec((error, result) => {
    if (error) {
      return res.status(400).send(error);
    }
    res.send(result);
    // console.log("view count rsult", result.viewcount);
  });

  // res.send(result);
});

app.get("/editpost/:id", async (req, res) => {
  const id = req.params.id;
  PostModel.findById(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await PostModel.findByIdAndRemove(id).exec();
  res.send("item is deleted");
});

const PORT = process.env.PORT || 8000;
console.log("prosess in server server", PORT);
app.listen(PORT);

//36mins
