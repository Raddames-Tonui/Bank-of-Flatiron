import React, { useState, useEffect } from "react";
import Transaction from "./Transaction";

function TransactionsList() {
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
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>

        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <th>
              <h3 className="ui center aligned header">{transaction.date}</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">{transaction.description}</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">{transaction.category}</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">{transaction.amount}</h3>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
