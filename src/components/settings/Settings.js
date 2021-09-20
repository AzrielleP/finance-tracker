import React, { useState } from "react";
import SettingsAccounts from "./Settings-Accounts";
import SettingsCategories from "./Settings-Categories";
import SettingsTheme from "./Settings-Theme.js";

function Settings(props) {
    const { accounts, categories, handleAdd, handleEdit } = props;

    // const [isEditing, setIsEditing] = useState(false);
    // const [testValue, setTestValue] = useState(accounts[0]);

    // Theme will be the default option when settings is opened
    const [option, setOption] = useState("theme");

    // const handleChange = (event) => {
    //     setTestValue(event.target.value);
    // }

    // const handleSave = (event) => {
    //     event.preventDefault();
    //     handleEdit(testValue, 0, accounts)
    // }

    const handleOptionChange = (event) => {
        let value = event.target.value;
        setOption(value);
    };
    return (
        //    <form onSubmit = {handleSave}>
        //        <input
        //          type = "text"
        //          value = {testValue}
        //          onChange = {handleChange}
        //        />
        //        <button type = "submit">Save</button>
        //    </form>

        <div>
            <h2>Settings</h2>
            <label>
                <input
                    type='radio'
                    name='settingOption'
                    value='theme'
                    checked={option === "theme"}
                    onChange={handleOptionChange}
                />
                Theme
            </label>

            <label>
                <input
                    type='radio'
                    name='settingOption'
                    value='accounts'
                    checked={option === "accounts"}
                    onChange={handleOptionChange}
                />
                Accounts
            </label>

            <label>
                <input
                    type='radio'
                    name='settingOption'
                    value='categories'
                    checked={option === "categories"}
                    onChange={handleOptionChange}
                />
                Categories
            </label>
            {option === "theme" && <SettingsTheme />}
            {option === "accounts" && <SettingsAccounts />}
            {option === "categories" && <SettingsCategories />}
        </div>
    );
}

export default Settings;
