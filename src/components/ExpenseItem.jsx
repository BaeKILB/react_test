import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.jsx";

function ExpenseItem(props) {
  return (
    // 반환시 맨 밖의 태그는 단 하나여야함
    // ex)
    //  return(
    //      <div></div>
    //      <p></p>
    //  )
    //  이런식으로 반환하지 말아야함

    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
