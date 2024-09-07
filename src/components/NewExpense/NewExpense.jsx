// import { useState } from "react";
// import ExpenseForm from "./ExpenseForm";
// import ExpenseFormButton from "./ExpenseForm";
// import "./NewExpense.css";

// const NewExpense = (props) => {
//   const [form, setForm] = useState(<ExpenseFormButton />);
//   const formHandler = (e) => {
//     if (e.target.name == "cancel" || e.target.name == "submit")
//       setForm(<ExpenseFormButton show={formHandler} />);
//     else if (e.target.name == "new")
//       setForm(
//         <ExpenseForm onAddExpense={props.onAddExpense} show={formHandler} />
//       );
//   };

//   return <div>{form}</div>;
// };
// export default NewExpense;
// //
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import AddNewExpense from "./AddNewExpense";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

 

  return (
    <div className="new-expense">
      {!isEditing ? (
        <AddNewExpense onClick={startEditingHandler} />
      ) : (
        <ExpenseForm onAddExpense={props.onAddExpense
        } onCancel={stopEditingHandler} />
      )}
    </div>
  );
};

export default NewExpense;
