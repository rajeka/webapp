import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./login/Login";
import Register from "./register/Register";
import NewExpense from "./pages/expense/NewExpense";
import ExpenseDetails from "./pages/expense/ExpenseDetails";
import Reports from "./pages/expense/Reports";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/new" element={<NewExpense />} />
          <Route path="/view/:expenseId" element={<ExpenseDetails />} />
          <Route path="/edit/:expenseId" element={<NewExpense />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
