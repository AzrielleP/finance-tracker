import React, { useState, useEffect } from "react";
import SidebarCategories from "./Sidebar-Categories";
import SidebarAccounts from "./Sidebar-Accounts";
import { calcTotalOfFiltered, calcFromAccount } from "../../helpers/calc";
import { computeAssets, computeLiabilities } from "../../helpers/calc";

function Sidebar(props) {
	const { transaction, accounts, dateToRender } = props;

	const [option, setOption] = useState("categories");
	const handleOptionChange = (event) => {
		let value = event.target.value;
		setOption(value);
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
		<div>
			<h2>Sidebar</h2>
			<label>
				<input
					type="radio"
					name="sidebarOption"
					value="categories"
					checked={option === "categories"}
					onChange={handleOptionChange}
				/>
				Categories
			</label>
			<label>
				<input
					type="radio"
					name="sidebarOption"
					value="accounts"
					checked={option === "accounts"}
					onChange={handleOptionChange}
				/>
				Accounts
			</label>
			{option === "categories" && (
				<SidebarCategories transaction={transaction} dateToRender={dateToRender} />
			)}
			{option === "accounts" && (
				<SidebarAccounts
					accountsInfo={accountsInfo}
					getAccounts={getAccounts}
					initialState={initialState}
				/>
			)}
		</div>
	);
}

export default Sidebar;
