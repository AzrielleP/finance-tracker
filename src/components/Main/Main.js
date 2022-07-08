import React, { useState, useEffect, useRef } from "react";
import moment from "moment";

// Components
import TransactionInput from "./subcomponents/TransactionInput/TransactionInput";
import TransactionOutput from "./subcomponents/TransactionOutput/TransactionOutput";
import Stats from "./subcomponents/Stats/Stats";
import Accounts from "./subcomponents/Accounts/Accounts";
import Settings  from "./subcomponents/Settings/Settings";

// Helpers
import { processData } from "../../helpers/groupingData";
import { accountsList } from "../../helpers/accountList";
import { categoriesList } from "../../helpers/categoriesList";
import { calcTotalOfFiltered, calcFromAccount, computeAssets, computeLiabilities } from "../../helpers/calc";

// Styled Components
import { ModalBackground } from "../../styled-components/Default.styled";

function Main(props) {
	// * === PROPS === * //
	const {option, handleDarkMode, isDarkMode} = props;
 
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

	const initialState = {
		totalAssets: 0,
		totalLiabilities: 0,
		items: [],
	};
	const [accountsInfo, setAccountsInfo] = useState(initialState);

	// Create an initial render
	const getAccounts = () => {
		let initial = initialState;
		for (let element of accounts) {
			let account = {
				accountName: element,
				value: 0,
			};
			initial.items.push(account);
		}
		return initial;
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
	}, [transId, transaction]);

	useEffect(() => {
		const handleData = () => {
			let data = initialState;

			for (let element of accounts) {
				let account = {
					accountName: element,
					value: 0,
				};

				// Compute total amount of account
				account.value =
					calcTotalOfFiltered(transaction, "toAccount", element, "transactionAmount") +
					calcFromAccount(transaction, "fromAccount", element, "transactionAmount");

				data.items.push(account);
			}

			if (data.items.length !== 0) {
				data.totalAssets = computeAssets(data.items);
				data.totalLiabilities = computeLiabilities(data.items);
			}

			setAccountsInfo(data);
		};
		handleData();
	}, [transaction, accounts]);

	return (
		<>
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
			
			{ option === "transactions" && (
				<TransactionOutput
					getTransactionId={getTransactionId}
					moveToNextMonth={moveToNextMonth}
					moveToPreviousMonth={moveToPreviousMonth}
					dataToRender={dataToRender}
					setToAddForm={setToAddForm}
				/>
			)}
			

			{ option === "stats" && (
				<Stats 
					transaction={transaction} 
					dateToRender={dateToRender}
					dataToRender = {dataToRender}
					moveToNextMonth={moveToNextMonth}
					moveToPreviousMonth={moveToPreviousMonth}
				/>
			)}

			{option === "accounts" && (
				<Accounts
					accountsInfo={accountsInfo}
					getAccounts={getAccounts}
					initialState={initialState}
				/>
			)}

			{option === "settings" && (
				<Settings
					handleDarkMode = {handleDarkMode}
					isDarkMode = {isDarkMode}
				/>
			)}
		</>

	)
}

export default Main;