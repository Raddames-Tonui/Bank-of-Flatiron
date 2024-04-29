import Transaction from "./Transaction";

function TransactionsList({transactions, onDelete, setOnDelete}) {


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
         <Transaction key={transaction.id} transaction={transaction} onDelete={onDelete} setOnDelete={setOnDelete}/>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
// date={transaction.date}  description={transaction.description} category={transaction.category} amount={transaction.amount}