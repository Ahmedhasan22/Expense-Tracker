import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = (props) => {
  // const title="";
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());

  const changeHandler = (e) => {
    console.log("Form changed");
    // validate inputs before adding to the list
    if (e.target.name == "title") setTitle(e.target.value);
    else if (e.target.name == "amount") setAmount(e.target.value);
    else if (e.target.name == "date") setDate(e.target.value);
    // `set${e.target.name}(e.target.value)`
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const expense = {
      id: Math.random(), // unique id for each expense
      description: title,
      amount: parseFloat(amount),
      date: new Date(date)
    };
    props.onAddExpense(expense);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <div className="form-control">
        <h3 htmlFor="expense-title">Title</h3>
        <input
          type="text"
          id="expense-title"
          name="title"
          value={title}
          onChange={changeHandler}
        />
      </div>
      <div className="form-control">
        <h3 htmlFor="expense-amount">Amount</h3>
        <input
          type="number"
          id="expense-amount"
          name="amount"
          value={amount}
          onChange={changeHandler}
        />
      </div>
      <div className="form-control">
        <h3 htmlFor="expense-date">Date</h3>
        <input
          type="date"
          id="expense-date"
          name="date"
          value={date}
          onChange={changeHandler}
          min="2019-01-01"
          max="2024-12-31"
        />
      </div>
      <div className="form-control" >
      <button id="add-expense" type="submit">
        Add Expense
      </button>
      </div>
        
    </form>
  );
};

export default ExpenseForm;
