import React, { useEffect } from "react";

function FilterComp({
  setToDoItems,
  toDoItems,
  setFilterVisibility,
  filterVisibility,
  setFilterValue,
  filterValue,
  setSorterValue,
  sorterValue,
}) {
  const filterHandler = (e) => {
    setFilterValue(e.target.value);
  };
  const sorterHandler = (e) => {
    setSorterValue(e.target.value);
  };

  const sortAlphabetically = () => {
    setToDoItems(
      toDoItems.sort((a, b) => {
        if (a.text < b.text) {
          return -1;
        }
        if (a.text > b.text) {
          return 1;
        }
      })
    );
  };
  const sortOldToNew = () => {
    setToDoItems(
      toDoItems.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
      })
    );
  };
  const sortNewToOld = () => {
    setToDoItems(
      toDoItems.sort((a, b) => {
        if (a.id > b.id) {
          return -1;
        }
        if (a.id < b.id) {
          return 1;
        }
      })
    );
  };

  useEffect(() => {
    console.log(sorterValue);
    if (sorterValue === "alphabetical") {
      sortAlphabetically();
      console.log("sorted alphabetically");
    } else if (sorterValue === "old-new") {
      sortOldToNew();
      console.log("sorted old-new");
    } else if (sorterValue === "new-old") {
      sortNewToOld();
      console.log("sorted new-old");
    }
  }, [sorterValue]);

  return (
    <div>
      <button
        className="filter-btn"
        onClick={() => {
          setFilterVisibility(!filterVisibility);
        }}
      >
        <i className="fas fa-filter"></i>
      </button>
      <form className={`filter-form ${!filterVisibility ? "hidden" : ""}`}>
        <select name="filter" value={filterValue} onChange={filterHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        <select name="sorter" value={sorterValue} onChange={sorterHandler}>
          <option value="old-new">First to last</option>
          <option value="new-old">Last to first</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </form>
    </div>
  );
}

export default FilterComp;
