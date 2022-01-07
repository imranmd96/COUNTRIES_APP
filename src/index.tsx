import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Routes } from 'react-router-dom'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Routes>
      <App />
    </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);


