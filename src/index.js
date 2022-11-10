import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

import {Reset} from 'styled-reset'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>
);

