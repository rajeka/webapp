import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import Expense from "./../model/Expense";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Logo />
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/new">
                New Expense
              </NavLink>
              <NavLink className="nav-link" to="/view">
                Expense Details
              </NavLink>
              <NavLink className="nav-link" to="/reports">
                Reports
              </NavLink>
            </div>
          </div>
          <div className="d-flex" role="search">
            <NavLink className="btn btn-sm btn-outline-light" to="/login">
              Login
            </NavLink>
            <NavLink
              className="btn btn-sm btn-outline-light mx-1"
              to="/register"
            >
              Register
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FaBars color="white" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
