import "./ExpenseFilter.css";

import React from "react";

const ExpenseFilter = (props) => {
  return (
    <div className="filter-container" >
      <h3>Filter by Year</h3>
      <select onChange={(e) => props.filter(e.target.value)}>
        <option value="All">All</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
      
    </div>
  );
};

export default ExpenseFilter;
