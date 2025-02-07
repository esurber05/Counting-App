// Import modules frmo React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // import main CSS file
import App from './App'; // important main App
import reportWebVitals from './reportWebVitals'; // import reporWebVitals function for measuring preformance

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
