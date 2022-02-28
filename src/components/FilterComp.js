import React from "react";

function FilterComp({ setFilterVisibility, filterVisibility }) {
  const filterVisibilityHandler = () => {
    console.log(!filterVisibility);
    setFilterVisibility(!filterVisibility);
  };
  return (
    <div>
      <button className="filter-btn" onClick={filterVisibilityHandler}>
        <i className="fas fa-filter"></i>
      </button>
      <form className={`filter-form ${!filterVisibility ? "hidden" : ""}`}>
        <select name="filter">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        <select name="sorter">
          <option value="old-new">Old-&gt;New</option>
          <option value="new-old">New-&gt;Old</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </form>
    </div>
  );
}

export default FilterComp;
