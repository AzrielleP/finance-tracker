import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
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
    const [dateToRender, setDateToRender] = useState(
        {
            month: moment(new Date).month(),
            year: moment(new Date).year()
        }); // Stores the month (based on index) and year to be displayed in TransactionOutput

    const [dataToRender, setDataToRender] = useState(dateToRender);

    // * ==== FUNCTIONS ==== * //

    const moveToPrevious = () => {

        let newDate = dateToRender;
        newDate.month = newDate.month - 1;
        if (newDate.month < 0) {
            newDate.year = newDate.year - 1;
            newDate.month = 11;
        }
        setDateToRender(newDate);
    };

    const moveToNext = () => {


        let newDate = dateToRender;
        newDate.month = newDate.month + 1;
        if (newDate.month > 11) {
            newDate.year = newDate.year + 1;
            newDate.month = 0;
        }
        setDateToRender(newDate);
    };


    const handleAddTransaction = (value) => {
        setTransaction((prevData) => [value, ...prevData]);
    };

    const handleAddSettings = (valueToAdd, whereToAdd) => {
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

    const handleDeleteTransaction = () => {
        const index = getTransactionIndex(transaction, transId);
        setTransaction(prev => (prev.filter((item, i) => i !== index)));
        hideForm();
    }

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
    }, [transaction, dateToRender]);

    useEffect(() => {
        const filterDataToRender = () => {
            let data = processedData.filter(({month, year}) => month === 'October' && year === dateToRender.year.toString())
            
            console.log(moment.months(dateToRender.month))
            setDataToRender(data[0]);
        }

        if (processedData.length !== 0) {
            filterDataToRender()
        }

        console.log(dateToRender)
    }, [processedData, dateToRender.month])

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
                    handleAddTransaction={handleAddTransaction}
                    clickedTransData={clickedTransData}
                    mode={mode}
                    hideForm={hideForm}
                    handleEditTransaction={handleEditTransaction}
                    handleDeleteTransaction = {handleDeleteTransaction}
                />
            )}

            <TransactionOutput 
                getTransactionId={getTransactionId} 
                moveToNext = {moveToNext}
                moveToPrevious = {moveToPrevious}
                dataToRender = {dataToRender}
            />

            <Sidebar 
                transaction={transaction} 
                accounts={accounts} 
                categories={categories}
            />

            <Settings
                accounts={accounts}
                categories={categories}
                handleAddSettings={handleAddSettings}
                handleEdit={handleEdit}
            />
        </div>
    );
}

export default App;
