import React from 'react';
import ExpenseItem from "./expenseitem"; 
import Card from '../UI/cards';
import './expenses.css';

function Expenses(props){
    return (
        <Card className='expenses'>
                
  <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} loactionOfexpen={props.items[0].loactionOfexpen}></ExpenseItem>
  <ExpenseItem  title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} loactionOfexpen={props.items[1].loactionOfexpen}></ExpenseItem>
  <ExpenseItem  title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} loactionOfexpen={props.items[2].loactionOfexpen}></ExpenseItem>
  <ExpenseItem  title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} loactionOfexpen={props.items[3].loactionOfexpen}></ExpenseItem>
        </Card>
    )
}

export default Expenses;