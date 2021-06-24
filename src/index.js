import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Practice from './components/Practice'
//import EmbedExpress from './components/EmbedExpress'
// import HooksClick from './components/HooksClick'







ReactDOM.render(
  <React.StrictMode>
    <App />
    <Practice />
    {/* <EmbedExpress /> */}
    {/* <HooksClick /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

