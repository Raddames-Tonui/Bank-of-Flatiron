import React from "react";


function Transaction({ date, description, category, amount }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td></td>
    </tr>
  );
}

export default Transaction;
