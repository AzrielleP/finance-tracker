import React, { useState, useEffect, useRef } from "react";
import AddEntry from "./components/AddEntry";
import Transaction from "./components/Transaction";
import Settings from "./components/settings/Settings";
import { processData, updateTransaction } from "./helpers/groupingData";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    // Props to be passed down
    const [accounts, setAccounts] = useState(["cash", "bank", "other"]);
    const [processedData, setProcessedData] = useState([]);
    const [transaction, setTransaction] = useState([]);
    const [categories, setCategories] = useState({
        income: ["salary", "interest", "other"],
        expense: ["food", "transportation", "other"],
    });
    const [showForm, setShowForm] = useState(false);

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

    const showEdit = (id) => {
        const index = transaction.findIndex(item => item.id === id);

    }

    const displayForm = () => {
        setShowForm(true);
    }

    const hideForm = () => {
        setShowForm(false);
    }

    // Do not run useEffect on first render
    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setProcessedData(processData(transaction));
        console.log(processedData)
    }, [transaction]);

    return (
        <div>
            <button 
                type = 'button'
                onClick = {displayForm}
            >
            New
            </button>
            

            {showForm &&
                <AddEntry
                    accounts={accounts}
                    transaction={transaction}
                    categories={categories}
                    handleTransaction={handleTransaction}
                    mode = 'add'
                    hideForm = {hideForm}
                />
            }
            <Transaction 
                data={processedData} 
                showEdit = {showEdit}
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
