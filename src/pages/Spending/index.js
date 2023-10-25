import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div class="aboutContainer">
      <div class="savings-header">
        <h3>Spending</h3>
      </div>
      <div class="body">
        <p>Coming Soon !</p>
      </div>

      <footer class="spending-footer">
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <div class="vr"></div>
          <Link to="/terms">Terms of Use</Link>
          <div class="vr"></div>
          <Link to="/eula">EULA</Link>
          <div class="vr"></div>
          <Link to="/partnership">Partnership</Link>
        </div>
        <div class="container">
          <p>&copy; 2020 THE SAVINGSBOX INC.</p>
        </div>
      </footer>
    </div>
  );
};

export default index;
