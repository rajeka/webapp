import { useState } from "react";
import ConfirmDialog from "../../components/ConfirmDialog";
import useExpenseByExpenseId from "../../hooks/useExpenseByExpenseId";

import DateUtils from "../../utils/DateUtils";
import CurrencyUtils from "./../../utils/CurrencyUtils";

import { Link, useNavigate, useParams } from "react-router";
import { deleteExpenseByExpenseId } from "../../services/ExpenseService";

const ExpenseDetails = () => {
  const { expenseId } = useParams<{ expenseId: string }>();
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    deleteExpenseByExpenseId(expenseId)
      .then((response) => {
        if (response && response.status === 204) {
          navigate("/");
        }
      })
      .catch((error) => setErrors(error.message))
      .finally(() => {
        setIsLoading(false);
        setShowDialog(false);
      });
  };

  if (!expenseId) {
    return <p className="text-danger">Invalid Expense ID</p>;
  }
  const { expense, errors, isLoading, setIsLoading, setErrors } =
    useExpenseByExpenseId(expenseId);

  return (
    <div className="container mt-2">
      {isLoading && <p>Loading...</p>}
      {errors && <p className="text-danger">{errors}</p>}
      <div className="d-flex flex-row-reverse mb-2">
        <button
          className="btn btn-sm btn-danger me-2"
          onClick={() => setShowDialog(true)}
        >
          Delete
        </button>
        <button
          className="btn btn-sm btn-warning mx-2"
          onClick={() => navigate(`/edit/${expenseId}`)}
        >
          Edit
        </button>
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

      <ConfirmDialog
        title="Confirm Delete Expense"
        message="Are you sure you want to delete this expense?"
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default ExpenseDetails;
