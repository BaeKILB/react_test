import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.jsx";
import Card from "../Card/Card.jsx";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    // 반환시 맨 밖의 태그는 단 하나여야함
    // ex)
    //  return(
    //      <div></div>
    //      <p></p>
    //  )
    //  이런식으로 반환하지 말아야함
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
