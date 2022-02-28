import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import InputForm from "./components/InputForm.js";

function App() {
  const [toDoItems, setToDoItems] = useState([]);
  const [toDoValue, setToDoValue] = useState("");
  const [filterVisibility, setFilterVisibility] = useState(false);

  return (
    <div className="todo-wrapper">
      <InputForm
        setToDoItems={setToDoItems}
        toDoItems={toDoItems}
        setToDoValue={setToDoValue}
        toDoValue={toDoValue}
        setFilterVisibility={setFilterVisibility}
        filterVisibility={filterVisibility}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
