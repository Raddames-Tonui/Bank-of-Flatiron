import React from "react";
import { MdDelete } from "react-icons/md";

function Transaction({ transaction, onDeleteTransaction, setOnDelete }) {
  const handleDelete = (id) => {
    fetch(`https://bank-of-flatiron-amrl.onrender.com/transactions/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        alert('Deleted Successfully');
        onDeleteTransaction(id); // Update transactions list after deletion
        setOnDelete(true); // Trigger re-fetching transactions after deletion
      })
      .catch((error) => {
        console.error('Error deleting transaction:', error);
        alert('Failed to delete transaction');
      });
  };

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <MdDelete onClick={() => handleDelete(transaction.id)} />
      </td>
    </tr>
  );
}

export default Transaction;
