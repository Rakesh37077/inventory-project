import React, { useState, useEffect } from "react";
import axios from "axios";
import { DragDropContext } from "react-beautiful-dnd";
import { FaClipboardList } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

import Column from "./Column";

const Kanban = () => {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [addAColumn, setAddAColumn] = useState(false);
  const [addAColumnButton, setAddAColumnButton] = useState(true);
  const [cardInputValue, setCardInputValue] = useState("");

  const COLUMNS = [
    {
      id: "1",
      title: "TO DO",
      tasks: "incomplete",
    },
    {
      id: "2",
      title: "Completed",
      tasks: completed,
    },
    {
      id: "3",
      title: "Pending",
      tasks: [],
    },
  ];

  const addColumnHanlder = () => {
    setAddAColumn(true);
    setAddAColumnButton(false);
  };
  const addCardCloseHandler = () => {
    setAddAColumn(false);
    setAddAColumnButton(true);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        const todoData = response;
        setCompleted(todoData.data.filter((task) => task.completed));
        setIncomplete(todoData.data.filter((task) => !task.completed));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId == destination.droppableId) return;

    //REMOVE FROM SOURCE ARRAY

    if (source.droppableId == 2) {
      setCompleted(removeItemById(draggableId, completed));
    } else {
      setIncomplete(removeItemById(draggableId, incomplete));
    }

    // GET ITEM

    const task = findItemById(draggableId, [...incomplete, ...completed]);

    //ADD ITEM
    if (destination.droppableId == 2) {
      setCompleted([{ ...task, completed: !task.completed }, ...completed]);
    } else {
      setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);
    }
  };

  function findItemById(id, array) {
    return array.find((item) => item.id == id);
  }

  function removeItemById(id, array) {
    return array.filter((item) => item.id != id);
  }

  return (
    <div className="bg-slate-900 min-h-screen pb-16">
      <div className="p-5 min-h-screen">
        <h1 className="mb-5 text-white text-2xl font-bold flex items-center">
          <FaClipboardList className="text-2xl mr-3" /> Kanban Board
        </h1>
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="kanbanContainer flex items-start gap-3">
            <Column title={"TO DO"} tasks={incomplete} id={"1"} />
            <Column title={"Completed"} tasks={completed} id={"2"} />
            <Column title={"Pending"} tasks={[]} id={"3"} />
            {/* <ol>
              <li>
                <div className="bg-gray-950 rounded-md pt-1 pb-1 w-64">
                  <div className="p-2 px-4  pb-1">
                    <h4 className="text-white text-sm font-bold">
                      Todo Completed
                    </h4>
                  </div>
                  {boardValues?.map((items) => (
                    <ol className="p-2 pb-0">
                      <li>{items}</li>
                    </ol>
                  ))}
                </div>
              </li>
            </ol> */}
            <div className="w-64">
              {addAColumnButton && (
                <div
                  className="p-3 pr-20 bg-slate-500 bg-opacity-50 inline-block rounded-md text-white hover:bg-slate-400"
                  onClick={() => addColumnHanlder()}
                >
                  <div className="flex items-center whitespace-nowrap">
                    <FiPlus className="text-2xl font-extrabold mr-1" />
                    Add another list
                  </div>
                </div>
              )}
              {addAColumn && (
                <form>
                  <textarea
                    placeholder="Enter a title for new Column..."
                    className="mb-1 p-2 w-full rounded-md bg-slate-600 bg-opacity-50 resize-none text-white text-base"
                    row="2"
                    value={cardInputValue}
                    onChange={(e) => setCardInputValue(e.target.value)}
                  ></textarea>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="p-1 px-3 text-white text-base bg-blue-500 rounded hover:bg-blue-600"
                    >
                      Add new column
                    </button>
                    <button
                      type="button"
                      onClick={addCardCloseHandler}
                      className="ml-2 text-white text-base p-2 hover:bg-slate-700 rounded-md"
                    >
                      <RxCross2 />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Kanban;
