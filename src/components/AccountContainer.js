import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


function AccountContainer() {

  // Fetching data from db.json
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then((data) => {
        setTransactions(data);
      })
  }, []);

  // After adding transaction to display below the other transactions
  function addTransaction(newTransaction){
      setTransactions([...transactions, newTransaction])
  }

  
  return (
    <div>
      <Search />
      <AddTransactionForm onAddTransaction={addTransaction}/>
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
