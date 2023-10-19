import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const AddRowModal = ({ video, CloseAddRowModalHandler }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75 z-50">
      <div className="modal-container bg-slate-900 w-1/2 md:w-1/2 mx-auto rounded shadow-lg overflow-y-auto">
        <button
          onClick={CloseAddRowModalHandler}
          className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-900 cursor-pointer"
        >
          <AiOutlineClose className="text-white text-2xl absolute right-0 top-0" />
        </button>

        <form className="px-8 pt-6 pb-8 mb-4 grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" for="date">
              Select Date
            </label>
            <input
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="text"
              placeholder="DD-MM"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" for="taskname">
              Task Name
            </label>
            <input
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="taskname"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" for="description">
              Description
            </label>
            <input
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" for="status">
              Status
            </label>
            <input
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="status"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" for="developedBy">
              Developed By
            </label>
            <input
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="developedBy"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" for="updatedBy">
              Updated By
            </label>
            <input
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="updatedBy"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" for="assignee">
              Assignee
            </label>
            <input
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="assignee"
              type="text"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-sky-500 mt-3 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add Row
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRowModal;
