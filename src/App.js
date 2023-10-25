import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Overview from "../src/pages/Overview";
import Savings from "../src/pages/Savings";
import Spending from "../src/pages/Spending";
import Credit from "../src/pages/Credit";
import Layout from "../src/pages/Layout";
import Privacy from "../src/pages/Privacy";
import Terms from "../src/pages/Terms";
import Eula from "../src/pages/Eula";
import Partnership from "../src/pages/Partnership";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="overview" element={<Overview />} />
          <Route path="savings" element={<Savings />} />
          <Route path="spending" element={<Spending />} />
          <Route path="credit" element={<Credit />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="eula" element={<Eula />} />
          <Route path="partnership" element={<Partnership />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
