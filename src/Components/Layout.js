import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
