import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import TransactionInput from "./components/TransactionInput/TransactionInput";
import TransactionOutput from "./components/TransactionOutput/TransactionOutput";
import Sidebar from "./components/Sidebar/Sidebar";
import { processData } from "./helpers/groupingData";
import { accountsList } from "./helpers/accountList";
import { categoriesList } from "./helpers/categoriesList";

// Styled Components
import { GlobalStyle } from "./styled-components/GlobalStyle";
import { AppContainer, ModalBackground } from "./styled-components/Default.styled";
import { ThemeProvider } from "styled-components";
import * as ThemeColors from "./styled-components/ThemeColors.styled";

function App() {
	// * === STATES - DATA === //
	const [accounts] = useState(accountsList);
	const [categories] = useState(categoriesList);

	// Stores the transaction data to be displayed on TransactionOutput
	const [processedData, setProcessedData] = useState([]);

	// Stores the submitted entries of the user
	const [transaction, setTransaction] = useState([]);

	// Stores the transaction ID for editing / deleting
	const [transId, setTransId] = useState("");

	// Stores the data of the selected transaction for editing
	const [clickedTransData, setClickedTransData] = useState({});

	// Stores the month (based on index) and year to be displayed in TransactionOutput
	const [dateToRender, setDateToRender] = useState({
		month: moment(new Date()).month(),
		year: moment(new Date()).year(),
	});

	// Stores the filtered data that the user will see based on the date selected
	const [dataToRender, setDataToRender] = useState(dateToRender);

	// * === STATES - CONDITIONAL RENDERING === //
	// show/hide the Form component
	const [showForm, setShowForm] = useState(false);

	// Two values: add and edit for TransactionInput
	const [mode, setMode] = useState("add");

	const [isDarkMode, setIsDarkMode] = useState(false);

	// * ==== FUNCTIONS : DATA ==== * //
	const handleAddTransaction = (value) => {
		setTransaction((prevData) => [value, ...prevData]);
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

	const moveToPreviousMonth = () => {
		let newDate = dateToRender;
		if (newDate.month - 1 < 0) {
			newDate.year = newDate.year - 1;
			newDate.month = 11;
		} else {
			newDate.month = newDate.month - 1;
		}
		setDateToRender({ year: newDate.year, month: newDate.month });
	};

	const moveToNextMonth = () => {
		let newDate = dateToRender;
		if (newDate.month + 1 > 11) {
			newDate.year = newDate.year + 1;
			newDate.month = 0;
		} else {
			newDate.month = newDate.month + 1;
		}
		setDateToRender({ year: newDate.year, month: newDate.month });
	};

	// * ==== FUNCTIONS : CONDITIONAL RENDERING ==== * //
	const setToAddForm = () => {
		setMode("add");
		displayForm();
	};

	const displayForm = () => {
		setShowForm(true);
	};

	const hideForm = () => {
		// Reset transaction ID to make the transaction re-clickable
		setTransId("");
		setShowForm(false);
	};

	const handleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
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
					month === moment.monthsShort(dateToRender.month) &&
					year === dateToRender.year.toString()
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
			<ThemeProvider theme={isDarkMode ? ThemeColors.dark : ThemeColors.light}>
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
						moveToNextMonth={moveToNextMonth}
						moveToPreviousMonth={moveToPreviousMonth}
						dataToRender={dataToRender}
						setToAddForm={setToAddForm}
					/>

					<Sidebar
						transaction={transaction}
						accounts={accounts}
						dateToRender={dateToRender}
						handleDarkMode={handleDarkMode}
					/>
				</AppContainer>
			</ThemeProvider>
		</>
	);
}

export default App;
