import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import apple from "../../Imgs/apple.png";
import google from "../../Imgs/google.png";

const index = () => {
  return (
    <div class="aboutContainer">
      <div class="savings-header">
        <h3>Overview</h3>
      </div>
      <div class="body">
        <p>
          Are you struggling to save money? The Savings Box is a mobile app
          designed to help you to meet your savings goals. It helps users
          overcome challenges related to savings and debt using a pioneering
          fintech business model that leverages technology and AI to
          revolutionize the way you save money, manage debts, and meet your
          spending goals. Key Features:
        </p>
        <ul>
          <li>
            Digital Financial Solutions: We provide a secure and user-friendly
            mobile platform that enables users to save money, make transfers,
            and access a range of Vendors providing financial coaching.
          </li>
          <li>
            E-commerce: Our Savings Box shop utilizes advanced algorithms and
            machine learning to help users access a wide array of cheaper prices
            to help them meet their spending goals.
          </li>
          <li>
            AI Driven Analytics + Financial Coaching: Our platform leverages AI
            capabilities to provide insights for our users and connect them to
            finance professionals providing financial coaching.
          </li>
          <li>
            Payment Solutions: We offer innovative payment solutions, including
            mobile wallets, and digital remittances, facilitating seamless
            transactions for users.
          </li>
          <li>
            Small Dollar Lending: We intend to offer small dollar loans to our
            users who’ve met certain eligibility requirements, providing an
            alternative to traditional lending institutions. Our platform will
            provide lending based on the securitized amount on their savings
            wallet, and work with a partner bank to provide affordable
            credit to users.
          </li>
        </ul>
        <h3>Why Savings Box?</h3>
        <li>
          Technological Expertise: Our team consists of experienced
          professionals with deep expertise in banking and cutting-edge
          technologies, such as artificial intelligence, and data analytics.
          This will allow us to develop and deploy innovative solutions quickly
          and effectively.
        </li>
        <li>
          Customer-Centric Approach: We prioritize customer experience and
          continuously strive to enhance our offerings based on user feedback.
          By focusing on simplicity, security, and convenience, we provide an
          exceptional user experience that fosters customer loyalty.
        </li>
        <li>
          Strategic Partnerships: We have established strategic partnerships
          with key players in the fintech space and we intend to forge new
          partnership with other players, including banks, and regulatory
          bodies. These partnerships will enable us to access a wider customer
          base, enhance our product offerings, and ensure compliance with
          regulatory standards.
        </li>
        <h3>Benefits</h3>
        <li>Save money effortlessly with trusted friends/family.</li>
        <li>Access more robust AI analysis and insights.</li>
        <li>Access financial coaching from finance professionals.</li>
        <li>
          Gain access to cheaper and comparable prices from a wide range of our
          partner businesses.
        </li>
        <li>No hidden fees.</li>

        <h3>User friendly</h3>
        <li>Intuitive interface.</li>
        <li>Easy navigation.</li>
        <li>Suitable for all skill levels.</li>

        <h3>Compatibility</h3>
        <li>Available for iOS and Android</li>
        <li>Supports smartphones and tablets.</li>
        <li>Seamless synchronization across devices.</li>

        <h3>Security</h3>
        <li>Protects your information.</li>
        <li>Bank-level encryption</li>

        <h3>Download</h3>
        <p>
          Join our growing community of satisfied users. Download Savings Box
          and Savings Box Vendor (if you’re a business), for free on App Store
          and Google Play Store. Get started today and experience the
          difference.
        </p>
        <div className="download">
          <img src={apple} className="apple" />
          <img src={google} className="google" />
        </div>
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
