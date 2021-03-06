import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const filterHandler = (event) => {
      props.onChangeHandler(event.target.value);
  };

  return (
    <div className="expenses-fi   lter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.changed} onChange={filterHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2010">2929</option>
          <option value="2019">2999</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
