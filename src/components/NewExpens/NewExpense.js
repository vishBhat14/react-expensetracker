import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense=(props)=>{
    const saveExpenseDatahandler=(enteredExpensedata)=>{
        const expenseDatas={
            ...enteredExpensedata,
            id:Math.random().toString()
        }
        props.onAddexpense(expenseDatas)

    }
return <div className='new-expense'>
<ExpenseForm onSaveExpenseData={saveExpenseDatahandler}></ExpenseForm>
  
</div>


};

export default NewExpense;