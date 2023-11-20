import React, { useState, useReducer } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineClose } from "react-icons/ai";
import { format, parseISO } from "date-fns";

const AddRowModal = ({ CloseAddRowModalHandler, dataHandler }) => {
  const [selectDate, setSelectDate] = useState(new Date());

  const initialState = {
    selectAllRow: undefined,
    date: "",
    taskName: "",
    description: "",
    status: "",
    developedBy: "",
    updatedBy: "",
    assignee: "",
  };
  const formReducer = (state, action) => {
    switch (action.type) {
      case "SET_FIELD":
        return { ...state, [action.field]: action.value };
      case "RESET_FORM":
        return { ...action.initialState };
      default:
        return state;
    }
  };
  const [formState, formDispatch] = useReducer(formReducer, initialState);

  const handleFieldChange = (field, value) => {
    formDispatch({ type: "SET_FIELD", field, value });
  };
  const handleAddRow = () => {
    console.log(formState);
    dataHandler(formState);
    // console.log("Form Data:", formState);
    CloseAddRowModalHandler();
  };
  console.log(selectDate);

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
          <div className="mb-4 modalDatePicker">
            <label className="block text-white text-sm mb-2" htmlFor="date">
              Select Date
            </label>
            <DatePicker
              isClearable
              wrapperClassName="datepickerWrapper"
              // dateFormat="dd MMM yyyy"
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              selected={selectDate}
              onChange={(date) =>
                handleFieldChange(
                  "date",
                  format(date, "dd MMM yyyy").toString()
                )
              }
            />
            {/* <input
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="text"
              placeholder="DD-MM"
            /> */}
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="taskname">
              Task Name
            </label>
            <input
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="taskname"
              type="text"
              value={formState.taskName}
              onChange={(e) => handleFieldChange("taskName", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              value={formState.description}
              onChange={(e) => handleFieldChange("description", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="status">
              Status
            </label>
            <input
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="status"
              type="text"
              value={formState.status}
              onChange={(e) => handleFieldChange("status", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm mb-2"
              htmlFor="developedBy"
            >
              Developed By
            </label>
            <input
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="developedBy"
              type="text"
              value={formState.developedBy}
              onChange={(e) => handleFieldChange("developedBy", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm mb-2"
              htmlFor="updatedBy"
            >
              Updated By
            </label>
            <input
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="updatedBy"
              type="text"
              value={formState.updatedBy}
              onChange={(e) => handleFieldChange("updatedBy", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="assignee">
              Assignee
            </label>
            <input
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="assignee"
              type="text"
              value={formState.assignee}
              onChange={(e) => handleFieldChange("assignee", e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-sky-500 mt-3 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleAddRow}
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
