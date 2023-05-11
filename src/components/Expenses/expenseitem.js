import React ,{useState} from 'react';
import ExpenseDate  from  './ExpenseDates';
import ExpenseDetails from './expensedetails';
import Card from '../UI/cards'

import "./ExpenseItem.css";
// import { useState } from 'react';

function ExpenseItem(props) {
const[amount, setTitle]=useState(props.amount);
  
 const clickhandler=()=>{
  setTitle('100');
console.log(amount);}
  return (

    
    <Card className="expense-item">
    <ExpenseDate date={props.date}/>
    <ExpenseDetails amount={amount}  loactionOfexpen={props.loactionOfexpen}   title={props.title} />
    <button onClick={clickhandler}>change amount</button>
    
    </Card>
  );
}
export default ExpenseItem;
