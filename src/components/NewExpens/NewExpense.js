import React,{useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense=(props)=>{
    const[isEditing,setIsEditing]=useState(false)
    const saveExpenseDatahandler=(enteredExpensedata)=>{
        const expenseDatas={
            ...enteredExpensedata,
            id:Math.random().toString()
        }
        props.onAddexpense(expenseDatas)
         setIsEditing(false);
    }

    const startEditingHandler=()=>{
        setIsEditing(true);
    }

    const StopEditingHandler=()=>{
        setIsEditing(false)
    }
return( 
<div className='new-expense'>
  {!isEditing && <button onClick={startEditingHandler}>Add New Button.</button>}  
{isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} onCancel={StopEditingHandler}></ExpenseForm>}
  
</div>
)

};

export default NewExpense;