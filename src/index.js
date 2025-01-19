import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 and later
import App from './App'; // Import the App component

const root = ReactDOM.createRoot(document.getElementById('root')); // React 18 and later
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
