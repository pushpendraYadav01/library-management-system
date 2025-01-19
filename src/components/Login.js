// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userType === 'admin') {
      navigate('/admin');
    } else if (userType === 'user') {
      navigate('/user');
    } else {
      alert('Please select a user type');
    }
  };

  return (
    <div className="login-container">
      <h2>Login to LMS</h2>
      <div>
        <label>User Type</label>
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="">Select</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
