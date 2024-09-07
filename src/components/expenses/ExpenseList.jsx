import "./ExpenseList.css";

import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  const noItems = <h2>NO Items Found!</h2>;
  const items = props.list.map((ex) => {
    return (
      <ExpenseItem
        key={ex.id}
        title={ex.description}
        amount={ex.amount}
        date={ex.date}
      />
    );
  });
  return (
    <>
      {props.list.length <= 0 && noItems}
      {props.list.length > 0 && items}
    </>
  );
};

export default ExpenseList;
