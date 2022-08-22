import React, {useState} from "react"
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredDate : '',
    //     enteredAmount : ''
    // })

    //one state approach create a object
    const titleChangeHandler = (event) => {

        setEnteredTitle(event.target.value)
        // setUserInput({
        //         ...userInput,
        //         enteredTitle : event.target.value,
        //     }
        // )

        //this is correct
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle : event.target.value
        //     }
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount : event.target.value,
    //     }
    // )

    //this is correct
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredAmount : event.target.value
    //     }
    // })

    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    //     setUserInput({
    //         ...userInput,
    //         enteredDate : event.target.value,
    //     }
    // )

    //this is correct way that the above one
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredDate : event.target.value
    //     }
    // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData =     {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate + 'T00:00:00')
        }
        console.log(expenseData)
        props.onSaveExpenseData(expenseData)
        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')

    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                {/* two way binding happening here we are resetting the values to empty strings */}
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={enteredDate} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit' >Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm