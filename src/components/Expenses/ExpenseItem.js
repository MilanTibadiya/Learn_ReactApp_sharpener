import React from "react";


import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} amount={props.amount}/>
      </Card>
  
  );
}

export default ExpenseItem;
