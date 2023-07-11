import { useState } from "react";
import ExpenseItem from "./ExpenseItem.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
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
        <ExpensesFilter
          selected={filteredYear}
          onGetFilterYear={getFilterYear}
        />
        {filteredExpenses
          //.filter((item) => item.date.getFullYear() == filteredYear)
          .map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            ></ExpenseItem>
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
