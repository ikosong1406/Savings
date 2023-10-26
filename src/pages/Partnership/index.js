import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div class="aboutContainer">
      <div class="savings-header">
        <h3>Partnership</h3>
      </div>
      <div class="body">
        <p>
          If you are looking to invest in a team or an idea, we will be happy to
          work with you. Contact us at partner@thesavingsbox.com
        </p>
      </div>

      <footer class="spending-footer">
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <div class="vr"></div>
          <Link to="/terms">Terms of Use</Link>
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
