import React,{useState}  from 'react';

import Card from '../UI/cards';
import './expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
function Expenses(props){
    const[filteredYear, SetFilteredYear]=useState('2020');
    const filterChangeHandler=(selectedYear)=>{
        SetFilteredYear(selectedYear);
    };

    const filteredeExpenses=props.items.filter((expense)=>{
        return expense.date.getFullYear().toString()===filteredYear
    })

    // let expensescontent=<p>no expenses found</p>;
    // if(filteredeExpenses.length>0)
    // {
    //     expensescontent=filteredeExpenses.map((expense)=> (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} loactionOfexpen={expense.loactionOfexpen}/>))
    // }
    return (
        <Card className='expenses'>
    <ExpensesFilter selected={filteredYear}  onChangeFilter={filterChangeHandler} />   
    <ExpensesList items={filteredeExpenses}></ExpensesList>
    
        </Card>
    )
}

export default Expenses;