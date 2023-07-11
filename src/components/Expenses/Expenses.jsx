import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter.jsx";
import ExpensesList from "./ExpensesList.jsx";
import ExpensesChart from "./ExpensesChart.jsx";
import Card from "../UI/Card/Card.jsx";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const getFilterYear = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesFilter
          selected={filteredYear}
          onGetFilterYear={getFilterYear}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
