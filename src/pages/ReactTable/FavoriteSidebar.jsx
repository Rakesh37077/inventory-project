import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const FavoriteSidebar = ({ closeFavoriteMadal }) => {
  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex z-50 justify-end">
        <div className="bg-gray-900 h-full p-4 lg:px-8 w-full lg:w-1/3 flex flex-col shadow">
          <div className="flex justify-between items-center text-xl pb-3 border-b-2 border-white">
            <div className="flex items-center">
              <p className="flex-1 font-bold text-white">Favorite List</p>
            </div>
            <button
              onClick={() => {
                closeFavoriteMadal();
              }}
            >
              <AiFillCloseCircle className="text-white" />
            </button>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto"></div>
        </div>
      </div>
    </>
  );
};

export default FavoriteSidebar;
