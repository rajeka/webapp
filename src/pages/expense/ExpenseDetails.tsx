import useExpenseByExpenseId from "../../hooks/useExpenseByExpenseId";
import Expense from "../../model/Expense";

import DateUtils from "../../utils/DateUtils";
import CurrencyUtils from "./../../utils/CurrencyUtils";

import { Link, useParams } from "react-router";

const ExpenseDetails = () => {
  let { expenseId } = useParams<{ expenseId: string }>();
  expenseId = undefined;
  if (!expenseId) {
    return <p className="text-danger">Invalid Expense ID</p>;
  }
  const { expense, errors, isLoading } = useExpenseByExpenseId(expenseId);

  return (
    <div className="container mt-2">
      {isLoading && <p>Loading...</p>}
      {errors && <p className="text-danger">{errors}</p>}
      <div className="d-flex flex-row-reverse mb-2">
        <button className="btn btn-sm btn-danger me-2">Delete</button>
        <button className="btn btn-sm btn-warning mx-2">Edit</button>
        <Link className="btn btn-sm btn-secondary" to="/">
          Back
        </Link>
      </div>
      <div className="card">
        <div className="card-body p-3">
          <table className="table table-borderless table-responsive">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{expense ? expense.name : "NA"}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{expense ? expense.category : "NA"}</td>
              </tr>
              <tr>
                <th>Amount</th>
                <td>
                  {expense ? CurrencyUtils.formatToUSD(expense.amount) : "NA"}
                </td>
              </tr>
              <tr>
                <th>Date</th>
                <td>
                  {expense ? DateUtils.formatDateString(expense?.date) : "NA"}
                </td>
              </tr>
              <tr>
                <th>Notes</th>
                <td>{expense ? expense.note : "NA"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseDetails;
