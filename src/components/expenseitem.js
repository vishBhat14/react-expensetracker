import ExpenseDate  from  './ExpenseDates';
 import ExpenseDetails from './expensedetails';
//  import Card from './card'
import "./ExpenseItem.css";

function ExpenseItem(props) {
const clickhandler=()=>{console.log('clicked!!')}
  return (

    
    <div className="expense-item">
    <ExpenseDate date={props.date}/>
    <ExpenseDetails amount={props.amount}  loactionOfexpen={props.loactionOfexpen}   title={props.title} />
    <button onClick={clickhandler}>change title</button>
    <button>delete expense</button>
    </div>
  );
}
export default ExpenseItem;
