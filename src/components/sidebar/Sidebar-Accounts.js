import React, { useEffect, useState } from "react";

function SidebarAccounts(props) {
    const { transaction, accounts } = props;
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

    // Calculate total assets
    const computeAssets = (item) => {
        return item.filter(({ value }) => value > 0).reduce((a, b) => a + b.value, 0);
    };

    // Calculate total liabilities
    const computeLiabilities = (item) => {
        return item.filter(({ value }) => value < 0).reduce((a, b) => a + b.value, 0);
    };

    useEffect(() => {
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
            <h2>Accounts</h2>
            <p>Total Assets: {accountsInfo.totalAssets}</p>
            <p>Total Liabilities: {accountsInfo.totalLiabilities}</p>
            <div>
                {(accountsInfo !== initialState ? accountsInfo : getAccounts()).items.map((item, key) => {
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
