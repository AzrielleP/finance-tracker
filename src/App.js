import React, { useState, useEffect, useRef } from "react";
import AddEntry from "./components/AddEntry";
import Transaction from "./components/Transaction";
import Settings from "./components/Settings";
import processData from "./helpers/processData";

function App() {
    // Props to be passed down
    const [accounts, setAccounts] = useState(["cash", "bank"]);
    const [processedData, setProcessedData] = useState([]);
    const [transaction, setTransaction] = useState([]);
    const [categories, setCategories] = useState({
        income: ["other"],
        expense: ["other"],
    });

    const handleTransaction = (value) => {
        setTransaction((prevData) => [value, ...prevData]);
    };

    const handleAddAccount = (value) => {
      setAccounts((prevData) => [value, ...prevData]);
    }

    const handleEditAccount = (value, index) => {
      let items = accounts;
      let itemToEdit = items[index];
      itemToEdit = value;
      items[index] = itemToEdit;
      setAccounts(items);
      console.log(accounts)
    }

    // Do not run useEffect on first render
    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setProcessedData(processData(transaction));
        ;
    }, [transaction]);

    return (
        <div>
            <AddEntry
                accounts={accounts}
                transaction={transaction}
                categories={categories}
                handleTransaction={handleTransaction}
            />
            <Transaction data={processedData} />
            <Settings
                accounts = {accounts}
                categories={categories}
                handleAddAccount = {handleAddAccount}
                handleEditAccount = {handleEditAccount}
            />
        </div>
    );
}

export default App;
