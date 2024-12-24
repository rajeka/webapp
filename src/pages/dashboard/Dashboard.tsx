import ExpenseList from "../../components/ExpenseList";
import useExpenses from "../../hooks/useExpenses";
import DashboardStatus from "./DashboardStatus";
import Expense from "./../../model/Expense";
import AppHelper from "../../utils/AppHelper";

const Dashboard = () => {
  const { expenses, error, isLoading } = useExpenses();
  const loggedInUser = AppHelper.getLoggedInUserId();
  const totalExpenses = expenses.reduce((acc: number, expense: Expense) => {
    return acc + parseFloat(expense.amount);
  }, 0);
  return (
    <div className="container">
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      <DashboardStatus
        loggedInUser={loggedInUser}
        totalExpenses={totalExpenses}
      />
      <hr />
      <ExpenseList expenses={expenses} />
    </div>
  );
};
export default Dashboard;
