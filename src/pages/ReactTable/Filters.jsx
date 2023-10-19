import React from "react";

const Filters = ({ columnFilters, setColumnFilters }) => {
  const taskName = columnFilters.find((f) => f.id === "taskName")?.value || "";

  const onFilterChange = (id, value) =>
    setColumnFilters((prev) =>
      prev
        .filter((f) => f.id !== id)
        .concat({
          id,
          value,
        })
    );

  return (
    <div className="w-full md:w-1/5">
      <input
        className="appearance-none block w-full bg-transparent text-white border border-zinc-700 py-2 px-2 h-12 leading-tight focus:outline-none focus:bg-transparent"
        id="filterInput"
        type="text"
        placeholder="Task Search"
        value={taskName}
        onChange={(e) => onFilterChange("taskName", e.target.value)}
      />
    </div>
  );
};

export default Filters;
