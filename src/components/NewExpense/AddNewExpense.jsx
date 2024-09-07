import React from "react";
import Card from "../UI/Card";
import './ExpenseForm.css';

const AddNewExpense = (props) => {
  return (
      
      
    <Card className="expense-form">
      <button
        name="new"
        className="add-expense"
        style={{ margin: "auto", padding: "20px", width: "100%" }}
        onClick={props.onClick}
        >
        Add New Expense
      </button>
    </Card>
          
  );
};

export default AddNewExpense;
