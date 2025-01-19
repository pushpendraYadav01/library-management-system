import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Attendance from './components/Attendance';
import FeeStructure from './components/FeeStructure';
import Contact from './components/Contact';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Sidebar and Main Content */}
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/fee-structure" element={<FeeStructure />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
