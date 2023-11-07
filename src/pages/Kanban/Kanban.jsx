import React, { useState, useEffect } from "react";
import { FaClipboardList } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Kanban = () => {
  const [addACard, setAddACard] = useState(false);
  const [addACardButton, setAddACardButton] = useState(true);
  const [boardValues, setboardValues] = useState([]);
  const [cardInputValue, setCardInputValue] = useState("");
  const [cardsumitHandler, setCardsumitHandler] = useState();

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
    console.log("submitted form");
    setboardValues((prevState) => [...prevState, cardInputValue]);
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="p-5 min-h-screen">
        <h1 className="mb-5 text-white text-2xl font-bold flex items-center">
          <FaClipboardList className="text-2xl mr-3" /> Kanban Board
        </h1>
        <div className="kanbanContainer flex items-start gap-3">
          <ol>
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
          <div
            className="p-3 pr-20 bg-slate-500 bg-opacity-50 inline-block rounded-md text-white hover:bg-slate-400"
            // onClick={() => AddNewListHandler()}
          >
            <div className="flex items-center whitespace-nowrap">
              <FiPlus className="text-2xl font-extrabold mr-1" />
              Add another list
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
