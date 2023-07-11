import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.jsx";

const NewExpense = (props) => {
  const [isAddExpense, setIsAddExpense] = useState(false);

  const addExpenseFormHandler = () => {
    setIsAddExpense((origin) => (origin ? false : true));
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    addExpenseFormHandler();
  };

  let addNewExpenseFrom = (
    <button onClick={addExpenseFormHandler}>Add New Expense</button>
  );

  if (isAddExpense) {
    addNewExpenseFrom = (
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    );
  }

  return <div className="new-expense">{addNewExpenseFrom}</div>;
};

export default NewExpense;
