import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem.js";
import "../InputForm.css";

function InputForm({ setToDoItems, toDoItems, setToDoValue, toDoValue }) {
  const submitHandler = (e) => {
    e.preventDefault();
    setToDoItems([
      ...toDoItems,
      { text: toDoValue, completed: false, id: Math.random() * 1000 },
    ]);
    console.log("submitted");
    setToDoValue("");
  };

  const deleteToDoItem = () => {
    console.log("deleted");
  };

  return (
    <>
      <h1>To-do list</h1>
      <form onSubmit={submitHandler}>
        <input
          type="input"
          placeholder="What do you need to do?"
          name="toDoList"
          id="toDoList"
          value={toDoValue}
          onChange={(e) => setToDoValue(e.target.value)}
          autoComplete="off"
        />
        <button
          className="submit-btn"
          disabled={toDoValue === "" ? true : false}
        >
          <i className="fas fa-circle-plus"></i>
        </button>
      </form>
      <ul>
        {toDoItems.map((toDoer) => {
          return (
            <ToDoItem
              toDoer={toDoer}
              key={toDoer.id}
              setToDoItems={setToDoItems}
              toDoItems={toDoItems}
            />
          );
        })}
      </ul>
    </>
  );
}

export default InputForm;