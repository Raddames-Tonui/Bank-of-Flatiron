import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [onDelete, setOnDelete] = useState(false);

  useEffect(() => {
    fetch("https://bank-of-flatiron-amrl.onrender.com/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data); // Initially set filtered transactions to all transactions
      })
      .catch((error) => console.error("Error fetching transactions:", error));
  }, [onDelete]);

  const onDeleteTransaction = (id) => {
    setOnDelete(true); // Trigger re-fetching transactions after deletion
  };

  // Function to filter transactions based on search term
  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions([...filteredTransactions, newTransaction]); // Update filtered transactions
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <AddTransactionForm onAddTransaction={addTransaction} />
      <TransactionsList
        transactions={filteredTransactions}
        onDeleteTransaction={onDeleteTransaction} // Pass onDeleteTransaction to TransactionsList
        setOnDelete={setOnDelete} // Pass setOnDelete to TransactionsList
      />
    </div>
  );
}

export default AccountContainer;
