import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
function App() {
  const expenses = [
    {
      id: 1,
      description: "Groceries",
      amount: 120,
      date: new Date(2023, 2, 22)
    },
    { id: 2, description: "Rent", amount: 500, date: new Date(2023, 2, 11) },
    { id: 3, description: "Gas", amount: 30, date: new Date(2023, 2, 3) }
    // Add more expenses here
  ];

  const [expensesState, setExpensesState] = useState(expenses);

  const addExpense = (expense) => {
    const newExpenses = [...expensesState, expense];
    setExpensesState(newExpenses);
    console.log(newExpenses);
  };
  return (
    < div>
      

      <header className="header">
        <img src={viteLogo} alt="Vite" className="logo" />
        <img src={reactLogo} alt="React" className="logo" />
        <h1>Expense Tracker</h1>
      </header>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenses={expensesState} />
    </div>
  );
}

export default App;
