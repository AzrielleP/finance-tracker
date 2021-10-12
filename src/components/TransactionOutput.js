import React from "react";

function Transaction(props) {
    const { getTransactionId, moveToNext, moveToPrevious, dataToRender } = props;

    return (
        <div>
            <button type = 'button' onClick = {moveToPrevious}> 
                Previous
            </button>
            <h1>{dataToRender.month} {dataToRender.year}</h1>
            <p>Income: {dataToRender.monthIncomeTotal}</p>
            <p>Expense: {dataToRender.monthExpenseTotal}</p>
            <button type = 'button' onClick = {moveToNext}>
                Next
            </button>   
            {!dataToRender.hasOwnProperty('dailyTrans') ? "No data found" :   
            <div>
                {dataToRender.dailyTrans.map((subItem, key) => {
                    return (
                        <div key={key}>
                            <p>Day: {subItem.day} </p>
                            {subItem.transactions.map((value, key) => {
                                return (
                                    <button key={key} 
                                    onClick = {getTransactionId}
                                    data-id = {value.id}
                                    >
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
                                    </button>
                                );
                            })}
                        </div>
                    );
                })}
            </div>}
        </div>
    );
}
export default Transaction;
