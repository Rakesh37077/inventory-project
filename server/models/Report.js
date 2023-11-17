const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  taskname: String,
  description: String,
  status: String,
  developedBy: String,
  updatedBy: String,
  assignee: String,
});

// give name inside of the model as 1st value for the mongodb table name
const ReportModel = mongoose.model("report", ReportSchema);
module.exports = ReportModel;
