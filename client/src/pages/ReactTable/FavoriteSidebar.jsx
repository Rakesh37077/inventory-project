import React from "react";
import "./FavoriteSidebar.css";
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
          <div className="flex flex-col flex-1 overflow-y-auto">
            <div className="bg-gray-950 text-xs text-white rounded mt-4 p-3 relative">
              <button className="absolute closeBtnPosition text-rose-500 hover:text-white">
                <AiFillCloseCircle className="text-xl" />
              </button>
              <div className="flex justify-between">
                <div className="mb-1 text-xs flex align-center">
                  <span className="block mr-2 h-3 w-3 rounded-sm bg-blue-400"></span>
                  Completed
                </div>
                <span className="text-xs text-white">Lakshumanasamy</span>
              </div>
              <h4 className="text-xl mb-1">Task Name</h4>
              <p className="text-xs mb-2 text-gray-400">
                this is the description for the daily meetings.
              </p>
              <div className="flex justify-between">
                <span className="text-xs">29 Jun</span>
                <div className="flex align-center">
                  <span className="text-xs">developed BY</span> &nbsp; | &nbsp;
                  <span className="text-xs">Updated By</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteSidebar;
