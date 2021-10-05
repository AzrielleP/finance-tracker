import React, { useState, useEffect, useRef } from "react";
import Form from "./Form";

function AddEntry(props) {
    const { accounts, categories, handleTransaction, mode, hideForm, clickedTransData, handleEditTransaction } = props;
    const initialState = {
        id: "",
        transactionType: "income",
        transactionDate: new Date(),
        fromAccount: "",
        toAccount: "",
        transactionCategory: "",
        transactionAmount: 0,
        transactionNotes: "",
    };
    const [values, setValues] = useState(mode === 'add' ? initialState: clickedTransData);
    const [errorMsgs, setErrorMsgs] = useState({
        fromAccount: "",
        toAccount: "",
        transactionCategory: "",
        transactionAmount: "",
    });

    const first = useRef(true)
    useEffect(() => {
        // Whenever we switch between transaction types, always reset transactionCategory
        if (first.current) {
            first.current = false;
            return;
        }
        setValues((prevValues) => ({ ...prevValues, transactionCategory: "" }));
    }, [values.transactionType]);

    // Block invalid characters in number input field
    const blockInvalidCharacter = (event) => {
        ["e", "E", "+", "-"].includes(event.key) && event.preventDefault();
    };

    const handleValidation = () => {
        let isFormValid = true;

        if (values.fromAccount === "") {
            isFormValid = false;
            setErrorMsgs((prevState) => ({ ...prevState, fromAccount: "cannot be empty" }));
        } else {
            setErrorMsgs((prevState) => ({ ...prevState, fromAccount: "" }));
        }

        if (values.transactionType === "transfer" && values.toAccount === "") {
            isFormValid = false;
            setErrorMsgs((prevState) => ({ ...prevState, toAccount: "cannot be empty" }));
        } else {
            setErrorMsgs((prevState) => ({ ...prevState, toAccount: "" }));
        }

        if (values.transactionType !== "transfer" && values.transactionCategory === "") {
            isFormValid = false;
            setErrorMsgs((prevState) => ({ ...prevState, transactionCategory: "cannot be empty" }));
        } else {
            setErrorMsgs((prevState) => ({ ...prevState, transactionCategory: "" }));
        }

        if (values.transactionAmount === 0) {
            isFormValid = false;
            setErrorMsgs((prevState) => ({ ...prevState, transactionAmount: "cannot be 0" }));
        } else {
            setErrorMsgs((prevState) => ({ ...prevState, transactionAmount: "" }));
        }
        return isFormValid;
    };

    const handleValueChange = (event) => {
        let { name, value } = event.target;
        if (name === "transactionDate") {
            value = new Date(value);
        }
        setValues({ ...values, [name]: value });
    };

    const clearInputs = () => {
        setValues(initialState);
    };

    const generateId = () => Date.now() + Math.random();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (handleValidation()) {
            if (values.transactionType === "expense") {
                values.transactionAmount *= -1;
            }
            values.id = generateId();
            console.log(values)
            mode === 'edit' ?  handleEditTransaction(values): handleTransaction(values);
           
            clearInputs();
            hideForm();
        }
    };

    const cancelSubmit = (event) => {
        event.preventDefault();
        clearInputs();
        hideForm();
    }
    return (
        <Form
            accounts = {accounts}
            categories = {categories}
            errorMsgs = {errorMsgs}
            values = {values}
            mode = {mode}
            handleSubmit = {handleSubmit}
            cancelSubmit = {cancelSubmit}
            handleValueChange = {handleValueChange}
            blockInvalidCharacter = {blockInvalidCharacter}
        />
    );
}

export default AddEntry;
