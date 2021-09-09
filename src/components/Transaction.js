import React from "react";

function Transaction(props) {
    const { data } = props;

    return (
        <div>
            <h1>Recent Transactions</h1>
            {data.map((item, key) => {
                return (
                    <div key={key}>
                        <h2>Month: {item.month}</h2>
                        {item.dailyTrans.map((subItem, key) => {
                            return (
                                <div key={key}>
                                    <p>Day: {subItem.day} </p>
                                    {subItem.transactions.map((value, key) => {
                                        return (
                                            <div key={key}>
                                                <p>Category: {value.transactionCategory}</p>

                                                {value.transactionType !== "transfer" && (
                                                    <p>Account: {value.fromAccount}</p>
                                                )}
                                                {value.transactionType === "transfer" && (
                                                    <div>
                                                        <p>From: {value.fromAccount}</p>
                                                        <p>To: {value.toAccount}</p>
                                                    </div>
                                                )}
                                                <p>Amount: {value.transactionAmount}</p>
                                                <p>Notes: {value.transactionNotes}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
export default Transaction;
