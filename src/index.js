import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
const list = 
[
  {
    id:1,
  text:'Objednat k lekari',
  time:' 22.7.2009',
  rem:true,
  },
  {
    id:2,
  text:'Objednat k pekarovi',
  time:' 22.7.2019',
  rem:false,
  },{
    id:3,
  text:'Objednat k doktorce',
  time:' 22.7.2009',
  rem:true,
  }
  ]