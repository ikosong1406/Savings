import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import CoachingCenter from "../src/pages/CoachingCenter";
import Layout from "../src/pages/Layout";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="coach" element={<CoachingCenter />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
