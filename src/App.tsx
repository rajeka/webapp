import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./login/Login";
import Register from "./register/Register";
import NewExpense from "./expense/NewExpense";
import ExpenseDetails from "./expense/ExpenseDetails";
import Reports from "./expense/Reports";

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
          <Route path="/view" element={<ExpenseDetails />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
