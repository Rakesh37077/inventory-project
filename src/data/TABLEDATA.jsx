const STATUS_REMAINING = {
  id: 1,
  name: "Not Started",
  className: "bg-red-400",
};
const STATUS_IN_PROGRESS = {
  id: 2,
  name: "In Progress",
  className: "bg-cyan-400",
};
const STATUS_TESTING = {
  id: 3,
  name: "Testing",
  className: "bg-yellow-400",
};
const STATUS_COMPLETED = {
  id: 4,
  name: "Completed",
  className: "bg-green-400",
};

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
    description: "Complet React Table demo",
    status: STATUS_COMPLETED,
    developedBy: "Rakesh",
    updatedBy: "Rakesh",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "2",
    date: new Date("2023/10/14"),
    taskName: "Complet JavaScript Task",
    description: "Read and make demo accordingly",
    status: STATUS_IN_PROGRESS,
    developedBy: "Rajan",
    updatedBy: "Ramesh",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "3",
    date: new Date("2023/08/17"),
    taskName: "Complet HTML Task",
    description: "Teach to others and make demo also.",
    status: STATUS_TESTING,
    developedBy: "ajay",
    updatedBy: "ajay",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "1",
    date: new Date("2023/10/17"),
    taskName: "Complet React Table Task",
    description: "Complet React Table demo",
    status: STATUS_COMPLETED,
    developedBy: "Rakesh",
    updatedBy: "Rakesh",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "2",
    date: new Date("2023/10/14"),
    taskName: "Complet JavaScript Task",
    description: "Read and make demo accordingly",
    status: STATUS_IN_PROGRESS,
    developedBy: "Rajan",
    updatedBy: "Ramesh",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "3",
    date: new Date("2023/08/17"),
    taskName: "Complet HTML Task",
    description: "Teach to others and make demo also.",
    status: STATUS_TESTING,
    developedBy: "ajay",
    updatedBy: "ajay",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "1",
    date: new Date("2023/10/17"),
    taskName: "Complet React Table Task",
    description: "Complet React Table demo",
    status: STATUS_COMPLETED,
    developedBy: "Rakesh",
    updatedBy: "Rakesh",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "2",
    date: new Date("2023/10/14"),
    taskName: "Complet JavaScript Task",
    description: "Read and make demo accordingly",
    status: STATUS_IN_PROGRESS,
    developedBy: "Rajan",
    updatedBy: "Ramesh",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "3",
    date: new Date("2023/08/17"),
    taskName: "Complet HTML Task",
    description: "Teach to others and make demo also.",
    status: STATUS_TESTING,
    developedBy: "ajay",
    updatedBy: "ajay",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "1",
    date: new Date("2023/10/17"),
    taskName: "Complet React Table Task",
    description: "Complet React Table demo",
    status: STATUS_COMPLETED,
    developedBy: "Rakesh",
    updatedBy: "Rakesh",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "2",
    date: new Date("2023/10/14"),
    taskName: "Complet JavaScript Task",
    description: "Read and make demo accordingly",
    status: STATUS_IN_PROGRESS,
    developedBy: "Rajan",
    updatedBy: "Ramesh",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "3",
    date: new Date("2023/08/17"),
    taskName: "Complet HTML Task",
    description: "Teach to others and make demo also.",
    status: STATUS_TESTING,
    developedBy: "ajay",
    updatedBy: "ajay",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "1",
    date: new Date("2023/10/17"),
    taskName: "Complet React Table Task",
    description: "Complet React Table demo",
    status: STATUS_COMPLETED,
    developedBy: "Rakesh",
    updatedBy: "Rakesh",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "2",
    date: new Date("2023/10/14"),
    taskName: "Complet JavaScript Task",
    description: "Read and make demo accordingly",
    status: STATUS_IN_PROGRESS,
    developedBy: "Rajan",
    updatedBy: "Ramesh",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "3",
    date: new Date("2023/08/17"),
    taskName: "Complet HTML Task",
    description: "Teach to others and make demo also.",
    status: STATUS_TESTING,
    developedBy: "ajay",
    updatedBy: "ajay",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "1",
    date: new Date("2023/10/17"),
    taskName: "Complet React Table Task",
    description: "Complet React Table demo",
    status: STATUS_COMPLETED,
    developedBy: "Rakesh",
    updatedBy: "Rakesh",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "2",
    date: new Date("2023/10/14"),
    taskName: "Complet JavaScript Task",
    description: "Read and make demo accordingly",
    status: STATUS_IN_PROGRESS,
    developedBy: "Rajan",
    updatedBy: "Ramesh",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "3",
    date: new Date("2023/08/17"),
    taskName: "Complet HTML Task",
    description: "Teach to others and make demo also.",
    status: STATUS_TESTING,
    developedBy: "ajay",
    updatedBy: "ajay",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "1",
    date: new Date("2023/10/17"),
    taskName: "Complet React Table Task",
    description: "Complet React Table demo",
    status: STATUS_COMPLETED,
    developedBy: "Rakesh",
    updatedBy: "Rakesh",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "2",
    date: new Date("2023/10/14"),
    taskName: "Complet JavaScript Task",
    description: "Read and make demo accordingly",
    status: STATUS_IN_PROGRESS,
    developedBy: "Rajan",
    updatedBy: "Ramesh",
    assignee: "Lakshumanasamy Dhandapani",
  },
  {
    selectAllRow: "3",
    date: new Date("2023/08/17"),
    taskName: "Complet HTML Task",
    description: "Teach to others and make demo also.",
    status: STATUS_TESTING,
    developedBy: "ajay",
    updatedBy: "ajay",
    assignee: "Lakshumanasamy Dhandapani",
  },
];

export default TABLEDATA;
