import React, { useState } from "react";

function AddTransactionForm({onAddTransaction, setTransactions}) {

  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    
    // Send form data to backend server

    fetch("https://bank-of-flatiron-amrl.onrender.com/transactions",{
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          alert("Failed to add transaction");
        }
        return response.json();
      })
      .then((data) => {
        setTransactions(data)
        onAddTransaction(data)
        alert("Transaction added successfully:", data);
        //  Resetting the form after successful submission
        setFormData({
          date: "",
          description: "",
          category: "",
          amount: "",
        
        });
      })
      .catch((error) => {
        console.error("Error adding transaction:", error);
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
            required
          />
          <input
            id="description"
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            id="category"
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <input
            id="amount"
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <button className="ui button" type="submit">
             Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
