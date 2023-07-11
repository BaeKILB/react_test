import ExpenseItem from "./ExpenseItem.jsx";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__failback">No expense found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
