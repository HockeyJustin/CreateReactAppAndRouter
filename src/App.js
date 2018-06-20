import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Game from './Game';
import ApiCall from './ApiCall';
import { Home, Navigation, Contact } from './HomeNavigationAndContact';

// ------------- Routes

  const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/api' component={ApiCall}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/game' component={Game}></Route>
    </Switch>
  );

// ------------- Main App (loaded in index.js)


const App = () => (
    <div className='app'>
    <h1>React Router + Basic API Get Demo</h1>
    <Navigation />
    <Main />
    </div>
);


export default App;