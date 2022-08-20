import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        console.log(event.target.value)

        //call a function from the parent so that you can pass the data up the chain
        props.onChangeOfFilter(event.target.value)
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        {/* two way binding below , we are passing the selected value as prop to the child compoment */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;