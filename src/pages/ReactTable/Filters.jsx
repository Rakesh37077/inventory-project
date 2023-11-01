import React from "react";

const Filters = ({ columnFilters, setColumnFilters }) => {
  // console.log({ columnFilters, setColumnFilters });
  const validIds = new Set([
    "taskName",
    "description",
    "updatedBy",
    "assignee",
  ]);
  const taskName = columnFilters.find((f) => validIds.has(f.id))?.value || "";
  // console.log({ taskName, columnFilters, setColumnFilters });
  // const onFilterChange = (id, value) =>
  //   setColumnFilters((prev) =>
  //     prev
  //       .filter((f) => f.id !== id)
  //       .concat({
  //         id,
  //         value,
  //       })
  //   );
  const onFilterChange = (ids, value) => {
    setColumnFilters((prev) => {
      const newFilters = prev.filter((f) => !ids.includes(f.id));
      const filtersToAdd = ids.map((id) => ({ id, value }));
      console.log("[...newFilters, ...filtersToAdd]", [
        ...newFilters,
        ...filtersToAdd,
      ]);
      return [...newFilters, ...filtersToAdd];
    });
  };

  // const onFilterChange = (id, value) => {
  //   const newFilters = [...columnFilters];
  //   const existingFilterIndex = newFilters.findIndex((filter) => filter.id === id);

  //   if (existingFilterIndex !== -1) {
  //     newFilters[existingFilterIndex].value = value;
  //   } else {
  //     newFilters.push({ id, value });
  //   }

  //   setColumnFilters(newFilters);
  // };

  return (
    <div className="w-full md:w-1/5">
      <input
        className="appearance-none block w-full bg-transparent text-white border border-zinc-700 py-2 px-2 h-12 leading-tight focus:outline-none focus:bg-transparent"
        id="filterInput"
        type="text"
        placeholder="Task Search"
        value={taskName}
        onChange={(e) =>
          onFilterChange(
            ["taskName", "description", "updatedBy", "assignee"],
            e.target.value
          )
        }
      />
    </div>
  );
};

export default Filters;
