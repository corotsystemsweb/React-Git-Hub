import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/index.scss';
import App from './App';
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/jquery.mCustomScrollbar.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
