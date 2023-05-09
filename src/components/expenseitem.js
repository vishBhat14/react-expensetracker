import ExpenseDate  from  './ExpenseDates';
 import ExpenseDetails from './expensedetails';
//  import Card from './card'
import "./ExpenseItem.css";

function ExpenseItem(props) {

  return (

    
    <div className="expense-item">
    <ExpenseDate date={props.date}/>
    <ExpenseDetails amount={props.amount}  loactionOfexpen={props.loactionOfexpen}   title={props.title} />
    
    </div>
  );
}
export default ExpenseItem;
