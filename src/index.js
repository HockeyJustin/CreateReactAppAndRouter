import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Square, Board} from './indexComponents'
import Game from './game';
import _ from 'underscore';
import { BrowserRouter } from 'react-router-dom';
import App from './App'


  // ========================================
  
  //ReactDOM.render(<Game />, document.getElementById("root"));
  
  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ), document.getElementById('root'));
 
  
  
