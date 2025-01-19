// src/components/Attendance.js
import React, { useState } from 'react';

const Attendance = () => {
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');

  const handleCheckIn = () => {
    setCheckInTime(new Date().toLocaleString());
  };

  const handleCheckOut = () => {
    setCheckOutTime(new Date().toLocaleString());
  };

  return (
    <div>
      <h2>Attendance</h2>
      <div>
        <button onClick={handleCheckIn}>Check In</button>
        <p>Check In Time: {checkInTime}</p>
        <button onClick={handleCheckOut}>Check Out</button>
        <p>Check Out Time: {checkOutTime}</p>
      </div>
    </div>
  );
};

export default Attendance;
