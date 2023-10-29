import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "../../components/Navbar";

const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
