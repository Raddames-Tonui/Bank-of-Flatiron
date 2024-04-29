import React from "react";
import { MdDelete } from "react-icons/md";


function Transaction({ transaction, setOnDelete }) {

 const handleDelete =(id) => {
  fetch(`https://bank-of-flatiron-amrl.onrender.com/transactions/${id}`, {
    method: 'DELETE',
    }
  )
    .then((response) => response.json())
    .then((res) => setOnDelete(id))
 } 


  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td><MdDelete onClick={() => handleDelete(transaction.id)}/>
      </td>
    </tr>
  );
}

export default Transaction;
