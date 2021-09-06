import React, { useState } from 'react';
import moment from 'moment';

function App() {
  const [ accounts ] = useState(['cash', 'bank']);
  const [ transaction, setTransaction] = useState({
    month: "",
    item: {}
  });
  const [ values, setValues] = useState({
    transactionType: "income", 
    transactionDate: new Date(),
    account: "",
    transactionCategory: "",
    transactionAmount: 0,
    transactionNotes:""
  });
  const [ categories ] = useState({
    income: ['salary', 'interest'],
    expense: ['food', 'transportation']
  });
  const [ errorMsgs, setErrorMsgs] = useState({
    account: "",
    transactionCategory: "",
    transactionAmount: ""
  });

  const handleValueChange = (event) => {
    let {name, value}  = event.target;
    if(name === "transactionDate") {
      value = new Date(value)
    }
    setValues({...values, [name] : value})
  }
  
  const handleValidation = () => {
    let isFormValid = true;
    if(values.account === "") {
      isFormValid = false;
      setErrorMsgs( prevState => ({ ...prevState, account: "cannot be empty"}))
    }
    else {
      setErrorMsgs( prevState => ({ ...prevState, account: ""}))
    }

    if(values.transactionCategory === "") {
      isFormValid = false;
      setErrorMsgs( prevState => ({ ...prevState, transactionCategory: "cannot be empty"}))
    }
    else {
      setErrorMsgs( prevState => ({ ...prevState, transactionCategory: ""}))
    }

    if(values.transactionAmount === 0) {
      isFormValid = false;
      setErrorMsgs( prevState => ({ ...prevState, transactionAmount: "cannot be 0"}))
    }
    else {
      setErrorMsgs( prevState => ({ ...prevState, transactionAmount: ""}))
    }

    return isFormValid;
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {
      if (values.transactionType === "expense") {
        values.transactionAmount *= -1
      };
      const month = values.transactionDate.toLocaleString('default', {month: 'long'});
  
      setTransaction({
        month: month,
        item: values
      })
    }
  }

  const blockInvalidCharacter = (event) => {
    ['e', 'E', '+', '-'].includes(event.key) && event.preventDefault();
  }

 
  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <label>
        <input 
            type = "radio"
            name = "transactionType"
            value = "income"
            checked = {values.transactionType === "income"}
            onChange = {handleValueChange}
        />
          Income
        </label>
        <label>
        <input 
            type = 'radio'
            name = 'transactionType'
            value = 'expense'
            checked = {values.transactionType === "expense"}
            onChange = {handleValueChange}
        />
          Expense
        </label>
        <label>
        <input 
            type = 'radio'
            name = 'transactionType'
            value = 'transfer'
            checked = {values.transactionType === "transfer"}
            onChange = {handleValueChange}
        />
          Transfer
        </label>
        <br/>
        <label>
          Transaction Date: 
          <input 
            type = "date"
            name = "transactionDate"
            onChange = {handleValueChange}
            defaultValue = {moment(new Date()).format("YYYY-MM-DD")}
          />
        </label>
        <br/>
        <label>
          Account:
          <select 
            value = {values.account}
            onChange = {handleValueChange}
            name = "account"
          >
           <option value = "" disabled>-- Select one --</option>
            {accounts.map((item, key) => {
              return (
                <option value = {item} key = {key}>
                  {item}
                </option>
              )
            })}
          </select>
          <span style={{color: "red"}}>{errorMsgs.account}</span>
        </label>
        <br/>
        <label>
          Category:
          <select 
            value = {values.transactionCategory}
            onChange = {handleValueChange}
            name = "transactionCategory"
          >
            <option value = "" disabled>-- Select one --</option>
            {categories[values.transactionType].map((item, key) => {
              return (
                <option value = {item} key = {key}>
                  {item}
                </option>
              )
            })}
          </select>
          <span style={{color: "red"}}>{errorMsgs.transactionCategory}</span>
        </label>
        <br/>
        <label>
          Amount:
          <input 
            type = "number"
            name = "transactionAmount"
            onChange = {handleValueChange}
            min = "0"
            placeholder = "0"
            onKeyDown = {blockInvalidCharacter}
          />
          <span style={{color: "red"}}>{errorMsgs.transactionAmount}</span>

        </label>
        <br/>
        <label>
          Notes:
          <input 
            type = "text"
            name = "transactionNotes"
            value = {values.transactionNotes}
            onChange = {handleValueChange}
          />
        </label>
        <button type = "submit">Submit</button>
      </form>

      <h1>Recent Transactions</h1>
      <p>Month: {transaction.month} </p>
      <p>Date: {moment(transaction.item.transactionDate).format('LL')} </p>
      <p>Category: {transaction.item.transactionCategory}</p>
      <p>Account: {transaction.item.account}</p>
      <p>Amount: {transaction.item.transactionAmount}</p>
      <p>Notes: {transaction.item.transactionNotes}</p>
    </div>
  );
}

export default App;
