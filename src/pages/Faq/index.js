import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import apple from "../../Imgs/apple.png";
import google from "../../Imgs/google.png";

const index = () => {
  return (
    <div class="aboutContainer">
      <div class="savings-header">
        <h3>Frequently Asked Questions (FAQs) </h3>
      </div>
      <div class="body">
        <h3>What is Savings Box?</h3>
        <ul>
          <li>
            Savings Box is a mobile app designed to help you save money, manage
            your finances, and meet your spending goals.
          </li>
        </ul>
        <h3>How does Savings Box work?</h3>
        <p>
          Savings Box provides a secure platform for saving money, making
          transfers, accessing financial coaching, and more. It uses technology
          and AI to help you save and manage your finances efficiently.{" "}
        </p>
        <li>Create a group Savings Box in your account.</li>
        <li>
          Invite your friends and family in the Savings Box. They will receive a
          notification and if they are interested and accept the invitation,
          they will be added to the Savings Box
        </li>
        <li>
          Add a contribution amount, and a frequency whether Bi-weekly or
          Monthly.
        </li>
        <li>Select a start date. </li>
        <li>Access more robust AI analysis and insights.</li>
        <li>Access financial coaching from finance professionals.</li>
        <li>
          Gain access to cheaper and comparable prices from a wide range of our
          partner businesses.
        </li>
        <li>No hidden fees.</li>

        <p>
          And once that is done, you are all set to embark on your savings
          journey with ease and transparency. Every member will be able to
          monitor the status of the Box on our Box Analytics platform and hold
          each other accountable. You can also chat with members of your box,
          all within the App using our end-to-end encrypted chat system. Also,
          if you don’t want to be part of the group box, we have an option for
          you too. Just create a Personal Box and make your contributions as The
          Savings Box App help you meet your savings goals.
        </p>

        <h3>How will I get my money?</h3>
        <p>
          At the end of the Box period, members contributions will be
          transferred to their wallet on the Savings Box App. Members can either
          choose to transfer their contributions to their bank accounts or use
          the balance in their wallets to shop through our Savings Box Shop,
          where they can compare and benefit from affordable prices from our
          Partner businesses. Worried about your money? You don’t have to, as
          all our contributions are secured with our Partner FDIC bank.
        </p>

        <h3>Is my financial information safe with Savings Box?</h3>
        <li>
          Yes, we take security seriously. Savings Box uses bank-level
          encryption to protect your information and ensures your data is
          secure.
        </li>

        <h3>How can businesses list their products on the Savings Box</h3>
        <li>
          Businesses can list their products and advertise on our shop by
          downloading the Savings Box Vendor App for free on both the App Store
          and Google Play Store.
        </li>

        <h3>Can I access Savings Box on multiple devices?</h3>
        <li>
          Yes, Savings Box is available for both iOS and Android devices and
          supports smartphones and tablets. It offers seamless synchronization
          across your devices.
        </li>

        <h3>Are there any hidden fees with Savings Box?</h3>
        <li>
          No, we do not have hidden fees. We are committed to transparency and
          providing a cost-effective solution to help you save.
        </li>

        <h3>How can I get in touch with customer support?</h3>
        <li>
          You can reach our customer support team by emailing
          support@thesavingsbox.com. We also offer live chat support for quick
          assistance.
        </li>

        <h3>Can I save money with friends or family using Savings Box?</h3>
        <li>
          You can reach our customer support team by emailing
          support@thesavingsbox.com. We also offer live chat support for quick
          assistance.
        </li>

        <h3>What kind of financial coaching is available on Savings Box?</h3>
        <li>
          ou can reach our customer support team by emailing
          support@thesavingsbox.com. We also offer live chat support for quick
          assistance.
        </li>

        <h3>Can I shop through Savings Box to access better prices?</h3>
        <li>
          You can reach our customer support team by emailing
          support@thesavingsbox.com. We also offer live chat support for quick
          assistance.
        </li>

        <h3>How do I download Savings Box?</h3>
        <li>
          You can join our community of users by downloading Savings Box for
          free on both the App Store and Google Play Store. If you're a
          business, you can also download Savings Box Vendor.
        </li>

        <h3> How can I stay connected with Savings Box updates and tips?</h3>
        <li>
          Follow us on social media for the latest updates, tips, and more!
        </li>

        <h3>Does Savings Box have a referral program?</h3>
        <li>
          Not yet, we will soon roll out our referral program that allows you to
          earn rewards for referring friends and family to Savings Box.
        </li>

        <h3>Does Savings Box pay interest.</h3>
        <li>
          No. But all our contributions are secured with our Partner FDIC bank
        </li>
        <h3>Is Savings Box available internationally?</h3>
        <li>
          Currently, Savings Box is available in the U.S. We plan to expand our
          availability to more regions in the future.
        </li>
      </div>

      <footer class="footer">
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <div class="vr"></div>
          <Link to="/terms">Terms of Use</Link>
          <div class="vr"></div>
          <Link to="/partnership">Partnership</Link>
        </div>
        <div class="container">
          <p>&copy; 2023 THE SAVINGSBOX INC.</p>
        </div>
      </footer>
    </div>
  );
};

export default index;
