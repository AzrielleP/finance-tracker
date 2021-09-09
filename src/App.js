import React, { useState, useEffect, useRef } from "react";
import AddEntry from "./components/AddEntry";
import Transaction from "./components/Transaction";
import moment from "moment";

function App() {
    // Props to be passed down
    const [accounts] = useState(["cash", "bank"]);
    const [processedData, setProcessedData] = useState([]);
    const [transaction, setTransaction] = useState([]);
    const [categories] = useState({
        income: ["salary", "interest"],
        expense: ["food", "transportation"],
    });

    const handleTransaction = (value) => {
        setTransaction((prevData) => [value, ...prevData]);
    };

    // Do not run useEffect on first render
    const firstUpdate = useRef(true);
    useEffect(() => {
        const processData = () => {
            const formatTime = (date) => moment(date).format("LL");
            const getMonth = (date) => moment(date).format("MMMM");

            let sortedData = transaction;

            // Sort data with the most recent one on top
            sortedData = sortedData.sort(
                (item1, item2) => item2.transactionDate.getTime() - item1.transactionDate.getTime()
            );

            /* Process the sorted data such that transactions will be grouped according to month, and then to each day
               Desired output:
               [
                {
                    month: ___
                    dailyTrans: [
                        {
                            day: ___
                            transactions: []
                        }
                    ]
                }
               ]
            */
            let modifiedData = [];
            sortedData.forEach((item) => {
                const selectedDate = formatTime(item.transactionDate);
                const selectedDateMonth = getMonth(item.transactionDate);

                // Create a new month if it doesn't exists yet
                if (!modifiedData.some((item) => item.month === selectedDateMonth)) {
                    modifiedData.push({ month: selectedDateMonth, dailyTrans: [], monthIncomeTotal: 0, monthExpenseTotal: 0 });
                }

                const indexMonth = modifiedData.findIndex((item) => item.month === selectedDateMonth);

                // Create a new day for a month if it doesn't exists yet
                if (!modifiedData[indexMonth].dailyTrans.some((item) => item.day === selectedDate)) {
                    modifiedData[indexMonth].dailyTrans.push({ day: selectedDate, transactions: [], dayIncomeTotal: 0, dayExpenseTotal: 0 });
                }

                const indexDay = modifiedData[indexMonth].dailyTrans.findIndex((item) => item.day === selectedDate);
                modifiedData[indexMonth].dailyTrans[indexDay].transactions.push(item);
            });

            // For computing transactionAmounts:
            let modifiedData2 = modifiedData
            const computeDailyTotal = (items, type, amount) => {
                return items.filter(({transactionType}) => transactionType === type)
                    .reduce((a,b) => a + Number(b[amount]), 0)
            };

            const computeMonthlyTotal = (items, amount) => {
                return items.reduce((a,b) => a+b[amount], 0); 
            }

            for (let month of modifiedData2) {
                for (let days of month.dailyTrans) {
                    days.dayIncomeTotal = computeDailyTotal(days.transactions, 'income', 'transactionAmount');
                    days.dayExpenseTotal = computeDailyTotal(days.transactions, 'expense','transactionAmount');

                    // Expense is already negative
                    days.dayTotal = days.dayIncomeTotal + days.dayExpenseTotal;
                }
                month.monthIncomeTotal = computeMonthlyTotal(month.dailyTrans, 'dayIncomeTotal');
                month.monthExpenseTotal = computeMonthlyTotal(month.dailyTrans, 'dayExpenseTotal');

                // Expense is already negative
                month.monthTotal = month.monthIncomeTotal + month.monthExpenseTotal;
            }
            console.log(modifiedData2)

            setProcessedData(modifiedData);
        };

        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        processData();
    }, [transaction]);

    return (
        <div>
            <AddEntry
                accounts={accounts}
                transaction={transaction}
                categories={categories}
                handleTransaction={handleTransaction}
            />
            <Transaction data={processedData} />
        </div>
    );
}

export default App;
