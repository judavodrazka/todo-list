import React, { useEffect } from "react";
import ToDoItem from "./ToDoItem.js";
import FilterComp from "./FilterComp.js";

let i = 0;

function InputForm({
  setToDoItems,
  toDoItems,
  setToDoValue,
  toDoValue,
  setFilterVisibility,
  filterVisibility,
  setFilterValue,
  filterValue,
  setSorterValue,
  sorterValue,
}) {
  const submitHandler = (e) => {
    e.preventDefault();
    setToDoItems([...toDoItems, { text: toDoValue, completed: false, id: i }]);
    console.log("submitted");
    i++;
    setToDoValue("");
  };

  const deleteToDoItem = () => {
    console.log("deleted");
  };

  return (
    <>
      <h1>To-do list</h1>
      <form className="searchbar-form" onSubmit={submitHandler}>
        <input
          className="searchbar"
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
      <FilterComp
        setToDoItems={setToDoItems}
        toDoItems={toDoItems}
        setFilterVisibility={setFilterVisibility}
        filterVisibility={filterVisibility}
        setFilterValue={setFilterValue}
        filterValue={filterValue}
        setSorterValue={setSorterValue}
        sorterValue={sorterValue}
      />
      <ul className={`${sorterValue === "new-old" ? "new-old" : ""}`}>
        {
          useEffect(() => {
            // return toDoItems.map((toDoer) => {
            //   return (
            //     <ToDoItem
            //       toDoer={toDoer}
            //       key={toDoer.id}
            //       setToDoItems={setToDoItems}
            //       toDoItems={toDoItems}
            //     />
            //   );
            // });
            console.log("useEffect ran");
            return <p>Hello</p>;
          }, [toDoItems])
          // toDoItems.map((toDoer) => {
          //   return (
          //     <ToDoItem
          //       toDoer={toDoer}
          //       key={toDoer.id}
          //       setToDoItems={setToDoItems}
          //       toDoItems={toDoItems}
          //     />
          //   );
          // })
        }
      </ul>
    </>
  );
}

export default InputForm;
