import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Navbar.css";
import Agri from "../Agri.png";
import Avatar from "./User/Avatar";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <header className="header">
      <nav>
        <img className="logo" src={Agri} alt="logo" />
        <ul className="nav__links">
          <li>
            <Link to="/">Agrisense</Link>
          </li>
          {loggedIn === false && (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="login">Login</Link>
              </li>
            </>
          )}
          {loggedIn === true && (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/addfarm">Add Farm</Link>
              </li>
              {/* <li>
                <Link to="/weather">Weather</Link>
              </li>
              <li>
                <Link to="/recommendations">Recommendations</Link>
              </li> */}
            </>
          )}
        </ul>
      </nav>
      {loggedIn === true && <Avatar></Avatar>}
    </header>
  );
}

export default Navbar;
