import ExpenseList from "../../components/ExpenseList";
import useExpenses from "../../hooks/useExpenses";
import DashboardStatus from "./DashboardStatus";
import Expense from "./../../model/Expense";

const Dashboard = () => {
  const { expenses, error, isLoading } = useExpenses();
  const loggedInUser = "ron@mail.com";
  const totalExpenses = expenses.reduce((acc: number, expense: Expense) => {
    return acc + expense.amount;
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
