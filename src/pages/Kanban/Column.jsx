import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Column = ({ title, tasks, id }) => {
  const [addACard, setAddACard] = useState(false);
  const [addACardButton, setAddACardButton] = useState(true);
  // const [boardValues, setboardValues] = useState([]);
  const [cardInputValue, setCardInputValue] = useState("");
  // const [cardsumitHandler, setCardsumitHandler] = useState();

  const addCardHandler = () => {
    setAddACard(true);
    setAddACardButton(false);
  };
  const addCardCloseHandler = () => {
    setAddACard(false);
    setAddACardButton(true);
  };
  const cardSumitHandler = (e) => {
    e.preventDefault();
    // console.log("submitted form");
  };

  const addCard = (title, boardId) => {
    const card = {
      id: Date.now() + Math.random(),
      title,
      completed: false,
    };
    const index = boards.findIndex((item) => item.id === boardId);
    if (index < 0) return;

    const tempBoard = [...boards];
    tempBoard[index].cards.push(card);
    setBoard(tempBoard);
  };

  return (
    <>
      <ol>
        <li id={id}>
          <div className="bg-gray-950 rounded-md pt-1 pb-1 w-64">
            <div className="p-2 px-4  pb-2">
              <h4 className="text-white text-sm font-bold">{title}</h4>
            </div>
            <Droppable droppableId={id}>
              {(provided, snapshot) => (
                <div
                  className="p-2 pb-0 columnMaxHeight min-height-20 overflow-y-auto"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {tasks.map((task, index) => (
                    <Task key={index} index={index} task={task} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            {addACard && (
              <form className="p-2" onSubmit={(e) => cardSumitHandler()}>
                <textarea
                  placeholder="Enter a title for this card..."
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
                    Add card
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
            {addACardButton && (
              <div className="listViewAddCardWrapper p-2 pb-1">
                <button
                  type="button"
                  className="addCard p-2 rounded-1 w-full text-base text-white flex items-center rounded-md hover:bg-slate-900"
                  onClick={() => addCardHandler()}
                >
                  <FiPlus className="text-base font-extrabold mr-1" />
                  Add a card
                </button>
              </div>
            )}
          </div>
        </li>
      </ol>
    </>
  );
};

export default Column;
