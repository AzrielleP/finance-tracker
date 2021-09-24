import React, { useEffect, useState } from "react";

function SidebarAccounts(props) {
	const { transaction, accounts } = props;
	const initialState = {
		items: [],
	};
	const [accountsInfo, setAccountsInfo] = useState(initialState);

	const handleData = () => {
		let data = initialState;
		const computeAccountTotal = (items, account, amount) => {
			return items
				.filter(({ fromAccount }) => fromAccount === account)
				.reduce((a, b) => a + Number(b[amount]), 0);
		};

		for (let element of accounts) {
			let account = {
				accountName: element,
				value: 0,
			};
			account.value = computeAccountTotal(transaction, element, "transactionAmount");
			data.items.push(account);
		}
		setAccountsInfo(data);
        console.log(accountsInfo)
	};

	useEffect(() => {
		handleData();
	}, [transaction, accounts]);

	return (
		<div>
			<h2>Accounts</h2>
			<div>
				{accountsInfo.items.map((item, key) => {
					return (
						<div key={key}>
							<p>{item.accountName}</p>
							<p>{item.value}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default SidebarAccounts;
