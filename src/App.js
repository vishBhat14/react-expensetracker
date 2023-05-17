import React,{useState} from 'react';
//import ExpenseItem from './components/expenseitem'
import Expenses from './components/Expenses/expenses';
import NewExpense from './components/NewExpens/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    loactionOfexpen:'fuelstation'
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),loactionOfexpen:'moviehall' },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    loactionOfexpen:'mall'
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    loactionOfexpen:'market'
  },
];
function App() {
  const[expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const addExpensehandler=(expense)=>{
   setExpenses((prevExpenses)=>{
    return [expense,...prevExpenses];
   });
  }
  // const expenseItems = [];

  // for (let i = 0; i < expenses.length; i++) {
   
  //   expenseItems.push(
  //     <ExpenseItem
      
  //       title={expenses[i].title}
  //       amount={expenses[i].amount}
  //       date={expenses[i].date}
  //       loactionOfexpen={expenses[i].loactionOfexpen}
  //     ></ExpenseItem>
  //   );
  // }

  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     {expenseItems}
  //   </div>
  // );

  return (
    <div>
      <NewExpense onAddexpense={addExpensehandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
{/*      
  <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} loactionOfexpen={expenses[0].loactionOfexpen}></ExpenseItem>
  <ExpenseItem  title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} loactionOfexpen={expenses[1].loactionOfexpen}></ExpenseItem>
  <ExpenseItem  title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} loactionOfexpen={expenses[2].loactionOfexpen}></ExpenseItem>
  <ExpenseItem  title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} loactionOfexpen={expenses[3].loactionOfexpen}></ExpenseItem>  */}
    </div>
  );
}

export default App;
