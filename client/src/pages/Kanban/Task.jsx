import { Draggable } from "react-beautiful-dnd";

export const Task = ({ task, index }) => {
  //   console.log(task);
  return (
    <>
      <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
        {(provided, snapshot) => (
          <div
            className="bg-slate-400 bg-opacity-20 text-white rounded text-base p-2 mb-2 relative"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <p>{task.title}</p>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    </>
  );
};
