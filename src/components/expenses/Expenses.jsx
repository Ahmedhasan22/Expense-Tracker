import { useState } from "react";
import "./Expenses.css";
import React from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("All");
  const filterYear = (year) => setYear(year);
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() == year
  );

  return (
    <Card className="container">
      <ExpenseFilter filter={filterYear} />
      {year == "All" ? (
        <>
          <ExpensesChart expenses={props.expenses} />
          <ExpenseList list={props.expenses} />
        </>
      ) : (
        <>
          <ExpensesChart expenses={filteredExpenses} />
          <ExpenseList list={filteredExpenses} />
        </>
      )}
    </Card>
  );
};
export default Expenses;
