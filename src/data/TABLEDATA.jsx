const STATUS_REMAINING = { id: 1, name: "Remaining", className: "bg-red-400" };
const STATUS_IN_PROGRESS = {
  id: 2,
  name: "In Progress",
  className: "bg-cyan-400",
};
const STATUS_TESTING = { id: 3, name: "Testing", className: "bg-yellow-400" };
const STATUS_COMPLETED = { id: 4, name: "Deployed", className: "bg-green-400" };

export const STATUSES = [
  STATUS_REMAINING,
  STATUS_IN_PROGRESS,
  STATUS_TESTING,
  STATUS_COMPLETED,
];

const TABLEDATA = [
  {
    selectAllRow: "1",
    date: new Date("2023/10/17"),
    taskName: "Complet React Table Task",
    description:
      "Complet React Table demo by reading documentation and implement it!!",
    status: STATUS_COMPLETED,
    developedBy: "Rakesh",
    updatedBy: "Rakesh",
    assignee: "Lakshumanasamy Dhandapani",
  },
];

export default TABLEDATA;
