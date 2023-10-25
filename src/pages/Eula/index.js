import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div class="aboutContainer">
      <div class="savings-header">
        <h3>End-User License Agreement ("Agreement")</h3>
      </div>
      <div class="body">
        <h2>End-User License Agreement (“Agreement”)</h2>
        <p>
          Please read this End-User License Agreement (“Agreement”) carefully
          before clicking the “I Agree” button, downloading or using SavingsBox
          (“Application”). By clicking the “I Agree” button, downloading or
          using the Application, you are agreeing to be bound by the terms and
          conditions of this Agreement. If you do not agree to the terms of this
          Agreement, do not click on the “I Agree” button and do not download or
          use the Application.
        </p>
        <h3>License</h3>
        <p>
          The SavingsBox Inc. grants you a revocable, non-exclusive,
          non-transferable, limited license to download, install and use the
          Application solely for your personal, non-commercial purposes strictly
          in accordance with the terms of this Agreement.
        </p>
        <h3>Restrictions</h3>
        <p>
          Without limitation you agree not to, and you will not permit others
          to:
        </p>
        <ol>
          <li>
            license, sell, rent, lease, assign, distribute, transmit, host,
            outsource, disclose or otherwise commercially exploit the
            Application or make the Application available to any third party.
          </li>
          <li>
            furnish false data including false names, addresses and contact
            details and fraudulently use credit/debit card numbers
          </li>
          <li>
            engage in any conduct which, in our exclusive reasonable opinion,
            restricts or inhibits any other user from properly using or enjoying
            the Mobile Application or Services.
          </li>
          <li>
            Furthermore, you agree that you will not use the Service to raise
            funds related to any of the following:
          </li>
          <li>Pharmaceuticals and other controlled substances</li>
          <li>Illegal drugs</li>
        </ol>
        <p>Drug paraphernalia</p>
        <ol>
          <li>Firearms, ammunition or other weapons</li>
          <li>Sexually oriented activities or materials</li>
          <li>Pornography</li>
        </ol>
        <p>
          Obscene or offensive activities or materials Materials or activities
          that promote intolerance, violence or hate
        </p>
        <ol>
          <li>Ponzi or pyramid schemes</li>
          <li>Illegal gambling, gaming, lotteries or sweepstakes</li>
          <li>
            Traveler’s checks, money orders, equities, annuities, or currencies,
            including digital currencies, such as bitcoins
          </li>
        </ol>
        <p>Counterfeit materials</p>
        <ol>
          <li>Frauds</li>
          <li>Scams</li>
        </ol>

        <h3>Modifications to Application</h3>
        <p>
          The SavingsBox Inc reserves the right to modify, suspend or
          discontinue, temporarily or permanently, the Application or any
          service to which it connects, with or without notice and without
          liability to you. However, in the event of permanent discontinuity,
          users may receive a minimum of 30 days’ notice and all contributions
          transferred to users account held with us.
        </p>
        <h3>Term and Termination</h3>
        <p>
          This Agreement shall remain in effect until terminated by you or The
          SavingsBox Inc. The SavingsBox Inc may, in its sole discretion, at any
          time and for any or no reason, suspend or terminate this Agreement
          with or without prior notice. This Agreement will terminate
          immediately, without prior notice from The SavingsBox Inc in the event
          that you fail to comply with any provision of this Agreement. You may
          also terminate this Agreement by deleting the Application and all
          copies thereof from your mobile device or from your desktop. Upon
          termination of this Agreement, you shall cease all use of the
          Application and delete all copies of the Application from your mobile
          device or from your desktop.
        </p>
        <h3>Compliance with Local laws</h3>
        <p>
          You agree to comply with applicable federal, state, and local laws,
          rules, and regulations related to or connected with use of the
          Services, and you assume all liability and responsibility for your use
          of the Services. The SavingsBox Inc makes no representation that
          Materials or other content on the Site are appropriate or available
          for use outside the United States. If you choose to access the Site
          from other locations, you do so on your own volition and at your own
          risk.
        </p>
        <h3>Severability</h3>
        <p>
          If any provision of this Agreement is held to be unenforceable or
          invalid, such provision will be changed and interpreted to accomplish
          the objectives of such provision to the greatest extent possible under
          applicable law and the remaining provisions will continue in full
          force and effect.
        </p>
        <h3>Amendments to this Agreement</h3>
        <p>
          The SavingsBox Inc. reserves the right, at its sole discretion, to
          modify or replace this Agreement at any time. If a revision is
          material, we will provide at least 30 days’ notice prior to any new
          terms taking effect. What constitutes a material change will be
          determined at our sole discretion.
        </p>
        <h3>Contact Information</h3>
        <p>
          If you have any questions about this Agreement, please contact us at
          help@thesavingsbox.com.
        </p>
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
