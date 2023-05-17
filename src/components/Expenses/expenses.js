import React,{useState}  from 'react';
import ExpenseItem from "./expenseitem"; 
import Card from '../UI/cards';
import './expenses.css';
import ExpensesFilter from './ExpenseFilter';
function Expenses(props){
    const[filteredYear, SetFilteredYear]=useState('2020');
    const filterChangeHandler=(selectedYear)=>{
        SetFilteredYear(selectedYear);
    }
    return (
        <Card className='expenses'>
    <ExpensesFilter selected={filteredYear}  onChangeFilter={filterChangeHandler} />    
    {props.items.map((expense)=> <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} loactionOfexpen={expense.loactionOfexpen}/>)}   
  {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} loactionOfexpen={props.items[0].loactionOfexpen}></ExpenseItem>
  <ExpenseItem  title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} loactionOfexpen={props.items[1].loactionOfexpen}></ExpenseItem>
  <ExpenseItem  title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} loactionOfexpen={props.items[2].loactionOfexpen}></ExpenseItem>
  <ExpenseItem  title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} loactionOfexpen={props.items[3].loactionOfexpen}></ExpenseItem> */}
        </Card>
    )
}

export default Expenses;