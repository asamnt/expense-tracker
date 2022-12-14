import ExpenseItem from "./ExpenseItem"
import Card from "./Card"
import ExpenseFilter from "./ExpenseFilter"
import {useState} from "react"
import ExpenseChart from "./ExpensesChart."

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020')

    const onChangeOfFilterHandler = (selectedYear) => {
        console.log('in expenses.js')
        console.log(selectedYear)
        setSelectedYear(selectedYear)
        
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString()===selectedYear)


    return (
        <Card>
            <div>
                <ExpenseFilter selected={selectedYear} onChangeOfFilter={onChangeOfFilterHandler}/>
            </div>
            <ExpenseChart expenses={filteredExpenses}/>
            {
            
            filteredExpenses.map(expense  => (
                <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
                />
            ))
            
            }
            {/* <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem> */}
        </Card>
    )
}

export default Expenses