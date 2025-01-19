// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/facilities">Facilities</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/attendance">Attendance</Link></li>
        <li><Link to="/fee-structure">Fee Structure</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
