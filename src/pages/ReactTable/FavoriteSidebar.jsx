import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const FavoriteSidebar = ({ closeFavorite }) => {
  return (
    <>
      <div className="fixed inset-0 bg-zinc-300 bg-opacity-50 flex z-50">
        <div className="bg-white h-full p-4 lg:px-8 w-full lg:w-1/3 flex flex-col shadow">
          <div className="flex justify-between items-center text-xl pb-3 border-b-2 border-white">
            <div className="flex items-center">
              <BiSolidCart className="text-2xl mr-2" />
              <p className="flex-1 font-bold">Cart List</p>
            </div>
            <button
              onClick={() => {
                closeFavorite();
              }}
            >
              <AiFillCloseCircle />
            </button>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto"></div>
        </div>
      </div>
    </>
  );
};

export default FavoriteSidebar;
