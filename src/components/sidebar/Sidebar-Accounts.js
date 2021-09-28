import React from "react";

function SidebarAccounts(props) {
    const { accountsInfo, getAccounts, initialState } = props;

    return (
        <div>
            <h2>Accounts</h2>
            <p>Total Assets: {accountsInfo.totalAssets}</p>
            <p>Total Liabilities: {accountsInfo.totalLiabilities}</p>
            <div>
                {(accountsInfo !== initialState ? accountsInfo : getAccounts()).items.map((item, key) => {
                    return (
                        <div key={key}>
                            <p>{item.accountName}: {item.value}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SidebarAccounts;
