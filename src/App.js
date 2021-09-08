import React, { useState, useEffect } from 'react';
import AddEntry from './components/addEntry';
import Transaction from './components/Transaction';


function App() {

  // Props to be passed down
  const [ accounts ] = useState(['cash', 'bank']);
  const [ data, setData ] = useState([]);
  const [ transaction, setTransaction] = useState({});
  const [ categories ] = useState({
    income: ['salary', 'interest'],
    expense: ['food', 'transportation']
  });

  const handleTransaction = (value) => {
    setTransaction(value);
  }

  const handleDataUpdates = (value) => {
    setData( prevData => [...prevData, value]);
  }

  useEffect(() => {
    console.log(data)
    handleDataUpdates();
  }, [transaction])

  return (
    <div>
      <AddEntry
        accounts = {accounts}
        transaction = {transaction}
        categories = {categories}
        handleTransaction = {handleTransaction}
      />
      <Transaction
        data = {data}
      />
    </div>
  );
}

export default App;
