import React, { useState, useEffect, useRef } from "react";
import AddEntry from "./components/AddEntry";
import Transaction from "./components/Transaction";
import Settings from "./components/settings/Settings";
import { processData, updateTransaction } from "./helpers/processData";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    // Props to be passed down
    const [accounts, setAccounts] = useState(["cash", "bank", "other"]);
    const [processedData, setProcessedData] = useState([]);
    const [transaction, setTransaction] = useState([]);
    const [categories, setCategories] = useState({
        income: ["other"],
        expense: ["other"],
    });

    const handleTransaction = (value) => {
        setTransaction((prevData) => [value, ...prevData]);
    };

    const handleAdd = (valueToAdd, whereToAdd) => {
        whereToAdd === "accounts"
            ? setAccounts((prevData) => [valueToAdd, ...prevData])
            : setCategories((prevData) => [valueToAdd, ...prevData]);
    };

    const handleEdit = (value, index, whereToEdit) => {
        let items = whereToEdit;
        let previousValue = items[index];
        let currentValue = previousValue;
        currentValue = value;
        items[index] = currentValue;

        whereToEdit === accounts ? setAccounts(items) : setCategories(items);

        const updatedTransaction = updateTransaction(transaction, currentValue, previousValue);
        setTransaction(updatedTransaction);
        setProcessedData(processData(transaction));
    };

    // Do not run useEffect on first render
    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setProcessedData(processData(transaction));
    }, [transaction]);

    return (
        <div>
            <AddEntry
                accounts={accounts}
                transaction={transaction}
                categories={categories}
                handleTransaction={handleTransaction}
            />
            <Transaction 
                data={processedData} 
            />
            <Sidebar 
                transaction = {transaction}
                accounts={accounts} 
                categories={categories} 
            />
            <Settings 
                accounts={accounts} 
                categories={categories} 
                handleAdd={handleAdd} 
                handleEdit={handleEdit} 
            />
        </div>
    );
}

export default App;
