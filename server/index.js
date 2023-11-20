const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const {
  loginFunction,
  signUpFunction,
} = require("./controllers/userController.js");
const {
  filteredDataFuction,
  modelDataFunc,
} = require("./controllers/reportController.js");
const UsersModel = require("./models/Users.js");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODBURL = process.env.MONGODBURL;

mongoose.connect(MONGODBURL).then(() => {
  console.log("DB connected successfully");
  app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });
});

// Signup Route
app.post("/signup", signUpFunction);

// Login Route
app.post("/login", loginFunction);

// --- Report routes ---

app.get("/filtertable", filteredDataFuction);
app.post("/filtertable", modelDataFunc);
