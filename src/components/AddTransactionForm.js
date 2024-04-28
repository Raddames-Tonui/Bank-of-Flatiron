import React, { useState } from "react";
import Transaction from "./Transaction";

function AddTransactionForm() {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const [transactions, setTransactions] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);

    const newTransaction = {
      id: Math.random().toString(36).substr(2, 9),
      ...formData,
    };

    setTransactions([...transactions, newTransaction]);
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  }

  function handleChange(event) {
    const key = event.target.id;
    setFormData({
      ...formData,
      [key]: event.target.value,
    });
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            id="description"
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            id="category"
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />
          <input
            id="amount"
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>

      {/* Render the list of transactions */}

        
      
    </div>
  );
}

export default AddTransactionForm;
