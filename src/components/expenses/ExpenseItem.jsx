import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import React from "react";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  return (
    <Card className="item-container">
      <div className="left">
        <ExpenseDate date={props.date} />
        <div className="title">
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="amount">
        <h2>${props.amount}</h2>
      </div>
    </Card>
  );
};

export default ExpenseItem;
