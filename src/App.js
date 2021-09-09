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
                    modifiedData.push({ month: selectedDateMonth, dailyTrans: [] });
                }

                const indexMonth = modifiedData.findIndex((item) => item.month === selectedDateMonth);

                // Create a new day for a month if it doesn't exists yet
                if (!modifiedData[indexMonth].dailyTrans.some((item) => item.day === selectedDate)) {
                    modifiedData[indexMonth].dailyTrans.push({ day: selectedDate, transactions: [] });
                }

                const indexDay = modifiedData[indexMonth].dailyTrans.findIndex((item) => item.day === selectedDate);
                modifiedData[indexMonth].dailyTrans[indexDay].transactions.push(item);
            });
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
