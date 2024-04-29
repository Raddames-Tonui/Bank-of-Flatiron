import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, onDeleteTransaction, setOnDelete }) {
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
          <Transaction
            key={transaction.id}
            transaction={transaction}
            onDeleteTransaction={onDeleteTransaction} // Pass onDeleteTransaction to Transaction
            setOnDelete={setOnDelete} // Pass setOnDelete to Transaction
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
