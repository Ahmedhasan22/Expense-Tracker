import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React from "react";
import Card from "../UI/Card";
const Expenses = (props) => {
  return (
    <Card className="container">
      {props.expenses.map((ex) => {
        return (
          <ExpenseItem
            key={ex.id}
            title={ex.description}
            amount={ex.amount}
            date={ex.date}
          />
        );
      })}
    </Card>
  );
};
export default Expenses;
