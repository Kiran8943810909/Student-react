import React from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route
} from "react-router-dom";
import Login from '../src/pages/Login';
import Home from '../src/pages/Home'; 
import './App.css'; 

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


