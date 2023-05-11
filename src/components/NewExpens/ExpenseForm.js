import React from 'react';
import './ExpenseForm.css';
const ExpenseForm=()=>{
    const TitleChangeHandler=(event)=>{
        console.log(event.target.value)
    }

return   <form>
<div className='new-expense__controls'>
    <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' onChange={TitleChangeHandler}></input>
    </div>
    <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' onChange={TitleChangeHandler}></input>
    </div>
    <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min='2019-01=01' max='2022-12-31' onChange={TitleChangeHandler}></input>
    </div>
</div>
<div className='new-expense__actions'>
    <button type='submit'>Add expenses</button>
</div>
</form>
}
export default ExpenseForm;