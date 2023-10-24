import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div class="aboutContainer">
      <div class="about-header">
        <h3>About Us</h3>
      </div>
      <div class="body">
        <p>
          The SavingsBox Inc. was founded in 2018 with the aim of creating an
          online platform to help solve the problem of savings in the U.S. and
          help users meet their spending goals. <br />
          <br />
          We foster savings by pooling each user’s strength to encourage other
          users to save to meet their savings goals <br />
          <br />
          How? Out of strength and accountability of many, we intend to help
          meet each user’s goals. <br />
          <br />
          We operate on the principles of inclusion, diversity, accountability,
          integrity, participation and respect for humanity.
        </p>
      </div>

      <footer class="footer">
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <div class="vr"></div>
          <Link to="/terms-of-use">Terms of Use</Link>
          <div class="vr"></div>
          <Link to="/eula">EULA</Link>
          <div class="vr"></div>
          <Link to="/patnership">Patnership</Link>
        </div>
        <div class="container">
          <p>&copy; 2020 THE SAVINGSBOX INC.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
