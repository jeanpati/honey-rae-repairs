import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/tickets">Tickets</Link>
      </li>
      <li className="navbar-item">
        <Link to="/customers">Customers</Link>
      </li>
      <li className="navbar-item">
        <Link to="/employees">Employees</Link>
      </li>
    </ul>
  );
};
