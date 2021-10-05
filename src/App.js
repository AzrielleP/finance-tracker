import React, { useState, useEffect, useRef } from "react";
import TransactionInput from "./components/TransactionInput";
import TransactionOutput from "./components/TransactionOutput";
import Settings from "./components/settings/Settings";
import Sidebar from "./components/sidebar/Sidebar";
import { processData, updateTransaction } from "./helpers/groupingData";

function App() {
    const [accounts, setAccounts] = useState(["cash", "bank", "other"]);
    const [processedData, setProcessedData] = useState([]); // Stores the transaction data to be displayed on TransactionOutput
    const [transaction, setTransaction] = useState([]); // Stores the submitted entries of the user
    const [categories, setCategories] = useState({
        income: ["salary", "interest", "other"],
        expense: ["food", "transportation", "other"],
    });
    const [showForm, setShowForm] = useState(false); // show/hide the TransactionInput component
    const [transId, setTransId] = useState(""); // Stores the transaction ID
    const [clickedTransData, setClickedTransData] = useState({}); // Stores the data of the selected transaction for editing
    const [mode, setMode] = useState("add"); // Two values: add and edit for TransactionInput

    // * ==== FUNCTIONS ==== * //
    const handleTransaction = (value) => {
        setTransaction((prevData) => [value, ...prevData]);
    };

    const handleAddTransaction = (valueToAdd, whereToAdd) => {
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

    const getTransactionIndex = (array, id) => array.map((item) => item.id).indexOf(Number(id));

    const getTransactionId = (event) => {
        event.preventDefault();
        const target = event.currentTarget.getAttribute("data-id");
        setTransId(target);
    };

    const handleEditTransaction = (value) => {
        const index = getTransactionIndex(transaction, transId);
        let newTransaction = [...transaction];
        newTransaction[index] = value;
        setTransaction(newTransaction);
    };

    const setToAddForm = () => {
        setMode("add");
        displayForm();
    };

    const displayForm = () => {
        setShowForm(true);
    };

    const hideForm = () => {
        setTransId(""); // Reset transaction ID to make the transaction re-clickable
        setShowForm(false);
    };

    // * ==== USEEFFECT ==== * //

    // Do not run useEffect on first render
    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setProcessedData(processData(transaction));
    }, [transaction]);

    useEffect(() => {
        if (transId !== "") {
            const index = getTransactionIndex(transaction, transId);
            setClickedTransData(transaction[index]);
            setMode("edit");
            displayForm();
        }
    }, [transId]);

    return (
        <div>
            <button type='button' onClick={setToAddForm}>
                New
            </button>

            {showForm && (
                <TransactionInput
                    accounts={accounts}
                    categories={categories}
                    handleTransaction={handleTransaction}
                    clickedTransData={clickedTransData}
                    mode={mode}
                    hideForm={hideForm}
                    handleEditTransaction={handleEditTransaction}
                />
            )}

            <TransactionOutput 
                data={processedData} 
                getTransactionId={getTransactionId} 
            />

            <Sidebar 
                transaction={transaction} 
                accounts={accounts} 
                categories={categories}
            />

            <Settings
                accounts={accounts}
                categories={categories}
                handleAddTransaction={handleAddTransaction}
                handleEdit={handleEdit}
            />
        </div>
    );
}

export default App;
