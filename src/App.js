import React, { useState, useEffect, useRef } from "react";
import AddEntry from "./components/AddEntry";
import Transaction from "./components/Transaction";

function App() {
    // Props to be passed down
    const [accounts] = useState(["cash", "bank"]);
    const [data, setData] = useState([]);
    const [transaction, setTransaction] = useState({});
    const [categories] = useState({
        income: ["salary", "interest"],
        expense: ["food", "transportation"],
    });

    const handleTransaction = (value) => {
        setTransaction(value);
    };

    // Do not run useEffect on first render
    const firstUpdate = useRef(true);
    useEffect(() => {
        const handleDataUpdates = () => {
            setData((prevData) => [...prevData, transaction]);
        };

        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        handleDataUpdates();
    }, [transaction]);

    return (
        <div>
            <AddEntry
                accounts={accounts}
                transaction={transaction}
                categories={categories}
                handleTransaction={handleTransaction}
            />
            <Transaction data={data} />
        </div>
    );
}

export default App;
