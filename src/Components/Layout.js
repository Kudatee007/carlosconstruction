import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Layout.css";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
