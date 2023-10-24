import React from "react";

const LikeButton = ({ getValue, row, column, table, data }) => {
  const LikeHandler = () => {
    // alert("Like button", row.id);
    table?.options?.meta?.addToFavorite(row.index, column.id, data);
  };
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <input
          id="default-checkbox"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={() => LikeHandler()}
        />
      </div>
    </>
  );
};

export default LikeButton;
