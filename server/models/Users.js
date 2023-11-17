const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// give name inside of the model as 1st value for the mongodb table name
const UsersModel = mongoose.model("users", UsersSchema);
module.exports = UsersModel;
