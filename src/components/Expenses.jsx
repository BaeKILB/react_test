import ExpenseItem from "./ExpenseItem.jsx"
import "./Expenses.css";

function Expenses(props) {
  return (
    <div>
      <ExpenseItem
        title={props.expenseItems[0].title}
        amount={props.expenseItems[0].amount}
        date={props.expenseItems[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenseItems[1].title}
        amount={props.expenseItems[1].amount}
        date={props.expenseItems[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenseItems[2].title}
        amount={props.expenseItems[2].amount}
        date={props.expenseItems[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenseItems[3].title}
        amount={props.expenseItems[3].amount}
        date={props.expenseItems[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
