import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import TransactionInput from "./components/TransactionInput";
import TransactionOutput from "./components/TransactionOutput";
import Settings from "./components/settings/Settings";
import Sidebar from "./components/sidebar/Sidebar";
import { processData, updateTransaction } from "./helpers/groupingData";
import { GlobalStyle } from "./components/styled-components/GlobalStyle";
import { AppContainer, ModalBackground } from "./components/styled-components/Containers.styled";

function App() {
    const [accounts, setAccounts] = useState(["Cash", "Bank", "Other"]);
    const [processedData, setProcessedData] = useState([]); // Stores the transaction data to be displayed on TransactionOutput
    const [transaction, setTransaction] = useState([]); // Stores the submitted entries of the user
    const [categories, setCategories] = useState({
        income: ["Salary", "Interest", "x", "y", "z", "a", "b", "Other"],
        expense: ["Food", "Transportation", "x", "y", "z", "a", "b", "Other"],
    });
    const [showForm, setShowForm] = useState(false); // show/hide the TransactionInput component
    const [transId, setTransId] = useState(""); // Stores the transaction ID
    const [clickedTransData, setClickedTransData] = useState({}); // Stores the data of the selected transaction for editing
    const [mode, setMode] = useState("add"); // Two values: add and edit for TransactionInput
    const [dateToRender, setDateToRender] = useState({
        month: moment(new Date()).month(),
        year: moment(new Date()).year(),
    }); // Stores the month (based on index) and year to be displayed in TransactionOutput

    const [dataToRender, setDataToRender] = useState(dateToRender); // Stores the filtered data that the user will see based on the date selected

    const [showSidebar, setShowSidebar] = useState(false); // Determines if the sidebar is displayed or not on mobile mode

    // * ==== FUNCTIONS ==== * //
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
        setTransaction((prev) => prev.filter((item, i) => i !== index));
        hideForm();
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

    // Move to previous month
    const moveToPrevious = () => {
        let newDate = dateToRender;
        if (newDate.month - 1 < 0) {
            newDate.year = newDate.year - 1;
            newDate.month = 11;
        } else {
            newDate.month = newDate.month - 1;
        }
        setDateToRender({ year: newDate.year, month: newDate.month });
    };

    // Move to next month
    const moveToNext = () => {
        let newDate = dateToRender;
        if (newDate.month + 1 > 11) {
            newDate.year = newDate.year + 1;
            newDate.month = 0;
        } else {
            newDate.month = newDate.month + 1;
        }
        setDateToRender({ year: newDate.year, month: newDate.month });
    };

    const handleSidebar = (event) => {
        event.preventDefault();
        setShowSidebar((prev) => !prev);
    };

    // * ==== USEEFFECT ==== * //

    // Do not run useEffect on first render
    // Side effect whenever we're adding/editing/deleting a new transaction
    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setProcessedData(processData(transaction));
    }, [transaction]);

    // Side effect when we're changing the month to be displayed
    useEffect(() => {
        const filterDataToRender = () => {
            let data = processedData.filter(
                ({ month, year }) =>
                    month === moment.monthsShort(dateToRender.month) && year === dateToRender.year.toString()
            );

            data.length !== 0 ? setDataToRender(data[0]) : setDataToRender(dateToRender);
        };

        filterDataToRender();
    }, [processedData, dateToRender]);

    // Side effect when we're clicking a transaction to edit it
    useEffect(() => {
        if (transId !== "") {
            const index = getTransactionIndex(transaction, transId);
            setClickedTransData(transaction[index]);
            setMode("edit");
            displayForm();
        }
    }, [transId]);

    return (
        <>
            <GlobalStyle />

            <ModalBackground show={showForm} />
            {showForm && (
                <TransactionInput
                    accounts={accounts}
                    categories={categories}
                    handleAddTransaction={handleAddTransaction}
                    clickedTransData={clickedTransData}
                    mode={mode}
                    hideForm={hideForm}
                    handleEditTransaction={handleEditTransaction}
                    handleDeleteTransaction={handleDeleteTransaction}
                />
            )}

            <AppContainer>
                <TransactionOutput
                    getTransactionId={getTransactionId}
                    moveToNext={moveToNext}
                    moveToPrevious={moveToPrevious}
                    dataToRender={dataToRender}
                    setToAddForm={setToAddForm}
                    handleSidebar={handleSidebar}
                />

                {/* <Sidebar
                    transaction={transaction}
                    accounts={accounts}
                    dateToRender={dateToRender}
                    handleSidebar={handleSidebar}
                    showSidebar={showSidebar}
                /> */}
            </AppContainer>

            {/* <Settings
				accounts={accounts}
				categories={categories}
				handleAddSettings={handleAddSettings}
				handleEdit={handleEdit}
			/> */}
        </>
    );
}

export default App;
