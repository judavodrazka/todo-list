import React from "react";

function ToDoItem({ toDoer, toDoItems, setToDoItems }) {
  const completeHandler = () => {
    setToDoItems(
      toDoItems.filter((completeItem) => {
        if (completeItem.id === toDoer.id) {
          toDoer.completed = !toDoer.completed;
          return completeItem;
        }
        return completeItem;
      })
    );
  };
  const deleteHandler = () => {
    setToDoItems(toDoItems.filter((deleteItem) => deleteItem.id !== toDoer.id));
  };

  return (
    <>
      <li>
        <span className={`todotext ${toDoer.completed ? "completed" : ""}`}>
          {toDoer.text}
        </span>
        <span className="button-wrapper">
          <button
            className={`check-btn ${toDoer.completed ? "completed" : ""}`}
            onClick={completeHandler}
          >
            <i
              className={`${
                toDoer.completed ? "fas fa-circle-xmark" : "fas fa-circle-check"
              }`}
            ></i>
          </button>
          <button className="delete-btn" onClick={deleteHandler}>
            <i className="fas fa-circle-minus"></i>
          </button>
        </span>
      </li>
    </>
  );
}

export default ToDoItem;
