import React, { useState } from "react";
import "./index.css";
import Logo from "../../Imgs/logo2.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navContainer">
      <Link to="/" onClick={() => setShowNav(false)}>
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""} id="navlinks">
        <NavLink
          exact={true}
          activeClassName="active"
          className="home-link"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <h3>HOME</h3>
        </NavLink>
        <NavLink
          activeClassName="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <h3>ABOUT</h3>
        </NavLink>
        <NavLink
          activeClassName="active"
          className="contact-link"
          to="/overview"
          onClick={() => setShowNav(false)}
        >
          <h3>OVERVIEW</h3>
        </NavLink>
        <div className="dropdown-container">
          <h3 className="coach-link" onClick={toggleDropdown}>
            COACH CENTER
          </h3>
          {showDropdown && (
            <div className="dropdown-menu">
              <NavLink
                activeClassName="active"
                className="menu"
                to="/savings"
                onClick={() => setShowNav(false)}
              >
                <h3>Savings</h3>
              </NavLink>
              <NavLink
                activeClassName="active"
                className="menu"
                to="/spending"
                onClick={() => setShowNav(false)}
              >
                <h3>Spending</h3>
              </NavLink>
              <NavLink
                activeClassName="active"
                className="menu"
                to="/credit"
                onClick={() => setShowNav(false)}
              >
                <h3>Credit</h3>
              </NavLink>
            </div>
          )}
        </div>
        <div className="button">
          <h6>Vendor Login </h6>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
