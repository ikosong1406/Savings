import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router
import Home from "../src/pages/Home";
import Overview from "../src/pages/Overview";
import Savings from "../src/pages/Savings";
import Layout from "../src/pages/Layout";
import Privacy from "../src/pages/Privacy";
import Terms from "../src/pages/Terms";
import Eula from "../src/pages/Eula";
import Partnership from "../src/pages/Partnership";
import FAQ from "../src/pages/Faq";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="overview" element={<Overview />} />
          <Route path="savings" element={<Savings />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="eula" element={<Eula />} />
          <Route path="partnership" element={<Partnership />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
