import ExpenseItem from "./ExpenseItem"
import Card from "./Card"
import ExpenseFilter from "./ExpenseFilter"
import {useState} from "react"

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020')

    const onChangeOfFilterHandler = (selectedYear) => {
        console.log('in expenses.js')
        console.log(selectedYear)
        setSelectedYear(selectedYear)
        
    }

    return (
        <Card>
            <div>
                <ExpenseFilter selected={selectedYear} onChangeOfFilter={onChangeOfFilterHandler}/>
            </div>
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem>
        </Card>
    )
}

export default Expenses