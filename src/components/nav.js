import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/">
        All Buildings
      </Link>{" "}
      |{" "}
      <Link className="nav__link" to="/add">
        Add Building
      </Link>
    </nav>
  );
}

export default Nav;
