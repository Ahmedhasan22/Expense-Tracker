import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props)=>{
    return <div>
        <ExpenseForm onAddExpense={props.onAddExpense} />
    </div>
}
export default NewExpense;