import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import Page1 from "./Components/Landingpage/Page1";

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Page1 />
    </Router>
    </div>
  );
}

export default App;
