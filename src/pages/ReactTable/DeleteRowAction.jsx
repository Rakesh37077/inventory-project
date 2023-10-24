import React from "react";
import { AiFillDelete } from "react-icons/ai";

const DeleteRowAction = ({
  cell,
  column,
  getValue,
  renderValue,
  row,
  table,
}) => {
  const handleDelete = () => {
    table.options.meta?.removeRow(row.index);
  };

  return (
    <div className="w-full">
      <button
        className="bg-rose-500 m-auto h-7 w-7 block bg-rose-500 flex items-center justify-center rounded"
        title="delete"
        onClick={(e) => handleDelete(e)}
      >
        <AiFillDelete className="text-base text-white" />
      </button>
    </div>
  );
};

export default DeleteRowAction;
