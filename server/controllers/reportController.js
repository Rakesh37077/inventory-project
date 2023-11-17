const UsersModel = require("./../models/Report.js");

const filteredDataFuction = (req, res) => {
  console.log(req.body);
  console.log("res", res);
};

module.exports = { filteredDataFuction };
