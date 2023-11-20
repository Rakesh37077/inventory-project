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
const modelDataFunc = async (req, res) => {
  console.log(req.body);
  const {
    date,
    taskname,
    description,
    status,
    developedBy,
    updatedBy,
    assignee,
  } = req.body;

  //   try {
  //     // Create a new report instance
  //     const newReport = new UsersModel({
  //       date,
  //       taskname,
  //       description,
  //       status,
  //       developedBy,
  //       updatedBy,
  //       assignee,
  //     });

  //     // Save the new report to the database
  //     await newReport.save();

  //     res.status(201).json({
  //       doc: newReport,
  //     });
  //     console.log("JSON Response:", JSON.stringify(responseData, null, 2));

  //     res.status(201).json(responseData);
  //   } catch (error) {
  //     console.error("Error creating new report:", error);
  //     res.status(500).json({ error: "Internal Server Error" });
  //   }
};

module.exports = { filteredDataFuction, modelDataFunc };

module.exports = { filteredDataFuction, modelDataFunc };
