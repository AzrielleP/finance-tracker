import React, { useState, useEffect } from 'react';
import moment from 'moment';

function AddEntry(props) {
    const {
        accounts,
        categories,
        handleTransaction,
    } = props

    // States inside addEntry
    const initialState = {
        transactionType: "income", 
        transactionDate: new Date(),
        fromAccount: "",
        toAccount: "",
        transactionCategory: "",
        transactionAmount: 0,
        transactionNotes:""
    }
    const [ values, setValues] = useState(initialState);
    const [ errorMsgs, setErrorMsgs] = useState({
        fromAccount: "",
        toAccount: "",
        transactionCategory: "",
        transactionAmount: ""
    });

    // Handler Functions
    useEffect(() => {
        // Whenever we switch between transaction types, always reset transactionCategory
        setValues( prevValues => ({...prevValues, transactionCategory : ""}));
    }, [values.transactionType])

     // Block invalid characters in number input field
    const blockInvalidCharacter = (event) => {
        ['e', 'E', '+', '-'].includes(event.key) && event.preventDefault();
    }
  
    const handleValidation = () => {
        let isFormValid = true;

        if(values.fromAccount === "") {
        isFormValid = false;
        setErrorMsgs( prevState => ({ ...prevState, fromAccount: "cannot be empty"}))
        }
        else {
        setErrorMsgs( prevState => ({ ...prevState, fromAccount: ""}))
        }

        if(values.transactionType === "transfer" && values.toAccount === "") {
        isFormValid = false;
        setErrorMsgs( prevState => ({ ...prevState, toAccount: "cannot be empty"}))
        }
        else {
        setErrorMsgs( prevState => ({ ...prevState, toAccount: ""}))
        }

        if(values.transactionType !== "transfer" && values.transactionCategory === "") {
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

    const handleValueChange = (event) => {
        let {name, value}  = event.target;
        if(name === "transactionDate") {
          value = new Date(value)
        }
        setValues({...values, [name] : value});
    }

    const clearInputs = () => {
        setValues(initialState);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (handleValidation()) {
        if (values.transactionType === "expense") {
            values.transactionAmount *= -1
        };
        // const month = values.transactionDate.toLocaleString('default', {month: 'long'});
        handleTransaction(values)
        clearInputs();
        }
    }
    return (

    <form onSubmit = {handleSubmit}>

      {/* Select transaction type */}
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

        {/* Transaction information */}
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

        {/* For Income and Expense transaction types */}
        {(values.transactionType !== "transfer") &&
          <div>
            <label>
              Account:
              <select 
                value = {values.fromAccount}
                onChange = {handleValueChange}
                name = "fromAccount"
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
              <span style={{color: "red"}}>{errorMsgs.fromAccount}</span>
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
          </div>
        }
        
        {/* For transfer transaction type */}
        {(values.transactionType === "transfer") &&
          <div>
            <label>
              From: 
              <select 
                value = {values.fromAccount}
                onChange = {handleValueChange}
                name = "fromAccount"
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
              <span style={{color: "red"}}>{errorMsgs.fromAccount}</span>
            </label>
            <br/>

            <label>
              To:
              <select 
                value = {values.toAccount}
                onChange = {handleValueChange}
                name = "toAccount"
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
              <span style={{color: "red"}}>{errorMsgs.toAccount}</span>
            </label>
            <br/>
          </div>
        }

        <label>
          Amount:
          <input 
            type = "number"
            name = "transactionAmount"
            onChange = {handleValueChange}
            value = {values.transactionAmount}
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
    )
}

export default AddEntry