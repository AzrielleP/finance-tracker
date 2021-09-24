import React, {useState} from "react";
import SidebarCategories from "./Sidebar-Categories";
import SidebarAccounts from "./Sidebar-Accounts";

function Sidebar(props) {
    const { transaction, accounts, categories } = props;

    const [option, setOption] = useState("accounts");
    const handleOptionChange = (event) => {
        let value = event.target.value;
        setOption(value);
    };
    
    return (
        <div>
            <h2>Sidebar</h2>
            <label>
                <input
                    type='radio'
                    name='sidebarOption'
                    value='categories'
                    checked={option === "categories"}
                    onChange={handleOptionChange}
                />
                Categories
            </label>
            <label>
                <input
                    type='radio'
                    name='sidebarOption'
                    value='accounts'
                    checked={option === "accounts"}
                    onChange={handleOptionChange}
                />
                Accounts
            </label>
            {option === "categories" && 
                <SidebarCategories
                    transaction = {transaction}
                    categories={categories} 
                />
            }
            {option === "accounts" && 
                <SidebarAccounts 
                    transaction = {transaction}
                    accounts={accounts} 
                />
            }
        </div>
    );
}

export default Sidebar;
