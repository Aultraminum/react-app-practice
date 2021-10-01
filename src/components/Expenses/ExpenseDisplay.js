import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./ExpenseDisplay.css";

const ExpenseDisplay = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (changedYear) => {
    setFilteredYear(changedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expense-display">
        <ExpensesFilter
          changed={filteredYear}
          onChangeHandler={filterChangeHandler}
        />
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default ExpenseDisplay;
