import React, { useState } from "react";
import "./index.css";
import Logo from "../../Imgs/logo2.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navContainer">
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <nav id="navlinks">
        <NavLink
          exact={true}
          activeClassName="active"
          className="home-link"
          to="/"
        >
          <h3>HOME</h3>
        </NavLink>
        <NavLink
          activeClassName="active"
          className="contact-link"
          to="/overview"
        >
          <h3>OVERVIEW</h3>
        </NavLink>
        <NavLink activeClassName="active" className="contact-link" to="/faq">
          <h3>FAQ</h3>
        </NavLink>
        <NavLink activeClassName="active" className="coach-link" to="/savings">
          <h3>COACHING CENTER</h3>
        </NavLink>
        <div className="button">
          <h6>Login </h6>
          <div className="vr2" />
          <h6> Sign up</h6>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
