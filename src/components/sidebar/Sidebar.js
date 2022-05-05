import React, { useState, useEffect } from "react";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { calcTotalOfFiltered, calcFromAccount } from "../../helpers/calc";
import { computeAssets, computeLiabilities } from "../../helpers/calc";

// Styled Components
import { FlexContainer, FixedContainer } from "../../styled-components/Default.styled";
import {
	SidebarContainer,
	SidebarSelectors,
	SidebarRadio,
} from "./Sidebar.styled";
import { Main } from "../../styled-components/Text.styled";

function Sidebar(props) {
	const { transaction, accounts, dateToRender, handleDarkMode } =
		props;
	const [option, setOption] = useState("transactions");
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
		<SidebarContainer>
			<FixedContainer>
				{/* <FlexContainer justifySmall="space-between" justifyLarge="flex-end">
					<ThemeToggler handleDarkMode={handleDarkMode} />
				</FlexContainer> */}

				<SidebarSelectors justifySmall="space-around" option={option}>
					<SidebarRadio
						type="radio"
						name="sidebarOption"
						value="categories"
						checked={option === "transactions"}
						onChange={handleOptionChange}
						id="transactions"
					/>
					<Main as="label" htmlFor="transactions">
						Transactions
					</Main>

					<SidebarRadio
						type="radio"
						name="sidebarOption"
						value="stats"
						checked={option === "stats"}
						onChange={handleOptionChange}
						id="stats"
					/>
					<Main as="label" htmlFor="stats">
						Stats
					</Main>

					<SidebarRadio
						type="radio"
						name="sidebarOption"
						value="accounts"
						checked={option === "accounts"}
						onChange={handleOptionChange}
						id="accounts"
					/>
					<Main as="label" htmlFor="accounts">
						Accounts
					</Main>

					<SidebarRadio
						type="radio"
						name="sidebarOption"
						value="settings"
						checked={option === "settings"}
						onChange={handleOptionChange}
						id="stats"
					/>
					<Main as="label" htmlFor="settings">
						Settings
					</Main>
				</SidebarSelectors>
			</FixedContainer>

			{/* {option === "stats" && (
				<Stats transaction={transaction} dateToRender={dateToRender} />
			)}
			{option === "accounts" && (
				<Accounts
					accountsInfo={accountsInfo}
					getAccounts={getAccounts}
					initialState={initialState}
				/>
			)} */}
		</SidebarContainer>
	);
}

export default Sidebar;
