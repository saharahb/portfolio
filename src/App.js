import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Pages/Home/NavBar";
import Home from "./Pages/Home/Homescreen";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Home />
        </div>
      </Router>
    </div>
  );
}

export default App;
