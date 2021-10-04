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
    const [index, setIndex] = useState('');
    const [getData, setGetData] = useState({});
    const [mode, setMode] = useState('add');

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
    };

    const showEdit = (event) => {
        event.preventDefault();
        let target = event.currentTarget.getAttribute('data-id')
        const index = transaction.map(item => item.id).indexOf(Number(target))
        setIndex(index);
        setGetData(transaction[index]);
    }

    const handleEditTransaction = (value) => { 
        let  newTransaction = [...transaction];
        newTransaction[index] = value;
        setTransaction(newTransaction);
    }

    const first = useRef(true)
    useEffect(() => {
        if (first.current) {
            first.current = false;
            return;
        }
        setMode('edit')
        displayForm();
    }, [getData])

    const showAdd = () => {
        setMode('add');
        displayForm();
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
    }, [transaction]);

    return (
        <div>
            <button 
                type = 'button'
                onClick = {showAdd}
            >
            New
            </button>
            

            {showForm &&
                <AddEntry
                    accounts={accounts}
                    categories={categories}
                    handleTransaction={handleTransaction}
                    getData = {getData}
                    mode = {mode}
                    hideForm = {hideForm}
                    handleEditTransaction = {handleEditTransaction}
                    index = {index}
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
