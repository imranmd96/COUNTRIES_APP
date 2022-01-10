import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FormProvider } from './contexts/ThemeContext';
import { BrowserRouter as Routes } from 'react-router-dom'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Routes>
      <FormProvider>
        <App />
      </FormProvider>
    </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);


