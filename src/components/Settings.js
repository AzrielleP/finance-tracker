import React, { useState } from "react";

function Settings(props) {
    const {
        accounts, 
        categories,
        handleAddAccount,
        handleEditAccount
    } = props;
    
    const [ isEditing, setIsEditing] = useState(false);
    const [ testValue, setTestValue] = useState(accounts[0]);

    const handleChange = (event) => {
        setTestValue(event.target.value);
    }

    const handleSave = (event) => {
        event.preventDefault();
        console.log(testValue)

        handleEditAccount(testValue, 0)
    }

    return (
       <form onSubmit = {handleSave}>
           <input
             type = "text"
             value = {testValue}
             onChange = {handleChange}
           />
           <button type = "submit">Save</button>
       </form>
    )
};


export default Settings;