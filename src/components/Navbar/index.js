import React from "react";
import "./index.css";
import { useState } from "react";
import Logo from "../../Imgs/logo2.png";
import { Link, NavLink } from "react-router-dom";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="navContainer">
      <Link to="/" onClick={() => setShowNav(false)}>
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""} id="navlinks">
        <NavLink
          exact="true"
          activeclassname="active"
          className="home-link"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <h3>HOME</h3>
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <h3>ABOUT</h3>
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <h3>CONTACT</h3>
        </NavLink>
        <NavLink
          activeclassname="active"
          className="coach-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <h3>COACH CENTER</h3>
        </NavLink>
        {/* <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        /> */}
      </nav>
      {/* <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      /> */}
    </div>
  );
};

export default Navbar;
