import React from 'react';
import moment from 'moment';

function Transaction(props) {
    const { data } = props

    return (
        <div>
             <h1>Recent Transactions</h1>
            {
                data.length !== 0 && data.map((item, key) => {
                return (
                    <div key = {key}>
                    <p>Date: {moment(item.transactionDate).format('LL')} </p>
                    <p>Category: {item.transactionCategory}</p>

                    {
                        item.transactionType !== "transfer" &&
                        <p>Account: {item.fromAccount}</p> 
                    }
                    {
                        item.transactionType === "transfer" &&
                        <div>
                        <p>From: {item.fromAccount}</p> 
                        <p>To: {item.toAccount}</p> 
                        </div>
                    }
                    <p>Amount: {item.transactionAmount}</p>
                    <p>Notes: {item.transactionNotes}</p>
                    </div>
                )
                })
            }
        </div>
    )
}

export default Transaction;
