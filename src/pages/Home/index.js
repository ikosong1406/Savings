import React from "react";
import "./index.css";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import mobile from "../../Imgs/banner-mobile1.png";
import apple from "../../Imgs/apple.png";
import google from "../../Imgs/google.png";
import MySlider from "../../components/Swiper";
import ContactForm from "../../components/ContactForm";
import mobile1 from "../../Imgs/mobile-view2.png";
import team1 from "../../Imgs/team1.jpg";
import team2 from "../../Imgs/team2.png";
import team3 from "../../Imgs/team3.jpg";

const Home = () => {
  return (
    <>
      <div className="container">
        <div class="header">
          <h2>Hi! I'm Savings Box</h2>
          <h2>Welcome to Our New Mobile App!</h2>
          <p>Helping You Save, Using the Power of Many!</p>
          <img src={mobile} alt="" class="banner-mobile1" />
          <div className="download">
            <img src={apple} className="apple" />
            <img src={google} className="google" />
          </div>
        </div>
        <div class="section1" id="screenshots">
          <h3>SCREENSHOTS</h3>
          <p>The Power of Many!</p>
          <MySlider />
        </div>

        <div class="section2" id="features">
          <h3>SAVINGS BOX FEATURES</h3>
          <div class="cover">
            <div class="part1">
              <div class="p1">
                <p>
                  Invite Friends/Family Our Platform gives Users the freedom to
                  form their own clusters from known friends and family members,
                  save and meet their spending goals.
                </p>
                <div class="hr"></div>
              </div>
              <div class="p1">
                <p>
                  No Hidden Fees There are no hidden fees for using our
                  platform. The platform provides financial accountability and
                  transparency among group members.
                </p>
                <div class="hr"></div>
              </div>
              <div class="p1">
                <p>
                  Security & Peace of Mind Our platform offers Users the most
                  needed security and peace of mind in meeting their spending
                  goals, using the power of many.
                </p>
                <div class="hr"></div>
              </div>
            </div>
            <div class="part2">
              <img src={mobile1} alt="" />
            </div>
            <div class="part3">
              <div class="p2">
                <div class="hr"></div>
                <p>
                  Group Chat & Notification Our end to end encrypted group chat
                  feature allows users to stay in touch with each other within
                  their own cluster. This enables users to discuss the status of
                  their groups.
                </p>
              </div>
              <div class="p2">
                <div class="hr"></div>
                <p>
                  Saves Time & Money Because Users formed their own clusters
                  from known friends and family members, there is a deep sense
                  of security and users will be able to make their contributions
                  and disburse funds with relative ease, supported by a world
                  class payment processing platform.
                </p>
              </div>
              <div class="p2">
                <div class="hr"></div>
                <p>
                  Access to Our Financial Coaching Center Users will be able to
                  access our Financial Coaching Center allowing them to benefit
                  from a wide range of financial topics affecting their
                  financial wellbeing, such as Savings, Spending, and Credit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="section3" id="team">
          <h3>JOIN OUR TEAM!</h3>
          <div class="card">
            <div class="card1">
              <img src={team1} alt="" />
              <h3>MOHAMED BANGURA</h3>
              <p>
                Mohamed Bangura is our President and Co-Founder. He is a highly
                experienced Finance Professional with over a decade's experience
                working in Financial Services and Fintech. He holds a Masters
                degree in Financial Economics and he is a graduate of The Ohio
                University. "I have witnessed the struggles of hard working
                people, not being able to meet their spending goals, and the
                very institutions where they save their monies, could not help
                them. That is why our team seeks to harness the power of many
                and technology to help people save and meet their spending
                goals".
              </p>
            </div>
            <div class="card2">
              <img src={team2} alt="" />
              <h3>LEON JONAS</h3>
              <p>
                Leon Jonas is our Vice President and Co-Founder. He is an
                experienced IT Professional with over a decade's industry
                experience. "I am excited to be part of a team that focuses on
                harnessing the savings and spending goals of hard working
                Americans"
              </p>
            </div>
            <div class="card3">
              <img src={team3} alt="" />
              <h3>DEEPAK SHARMA</h3>
              <p>
                Deep Sharma is our IT Consultant (AppiTech). He holds a Masters
                degree in Computer Science with over 5 years experience working
                on mobile application development. "I became interested in The
                SavingsBox Team, because they strive to be unique and different"
              </p>
            </div>
          </div>
        </div>

        <div class="section4">
          <h3>CONTACT US</h3>
          <ContactForm />
        </div>

        <footer class="footer">
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
      <Loader type="bars" />
    </>
  );
};

export default Home;
