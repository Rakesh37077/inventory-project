const UsersModel = require("./../models/Report.js");

const filteredDataFuction = async (req, res) => {
  const {
    date,
    taskname,
    description,
    status,
    developedBy,
    updatedBy,
    assignee,
  } = req.body;
  if (
    !date ||
    !taskname ||
    !description ||
    !status ||
    !developedBy ||
    !updatedBy ||
    !assignee
  ) {
    res.status(404);
    throw new Error("please fill the required fields");
  }
};
module.exports = { filteredDataFuction };
