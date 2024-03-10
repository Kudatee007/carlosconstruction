import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About Us/About";
import Project from "./Components/Project/Project";
import Page1 from "./Components/Landingpage/Page1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
          <Route path="/" element={<Page1 />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
