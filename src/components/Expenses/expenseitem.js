import React  from 'react';
import ExpenseDate  from  './ExpenseDates';
import ExpenseDetails from './expensedetails';
import Card from '../UI/cards'

import "./ExpenseItem.css";
// import { useState } from 'react';

function ExpenseItem(props) {

  
 
  return (

    
    <Card className="expense-item">
    <ExpenseDate date={props.date}/>
    <ExpenseDetails amount={props.amount}  loactionOfexpen={props.loactionOfexpen}   title={props.title} />
    {/* <button onClick={clickhandler}>change amount</button> */}
    
    </Card>
  );
}
export default ExpenseItem;
