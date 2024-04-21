// import React from 'react';
// import logo from './logo.svg';
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Album from "./pages/Album";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Album" element={<Album />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
