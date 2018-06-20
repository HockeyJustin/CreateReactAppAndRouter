import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Game from './game';
import ApiCall from './ApiCall';

const App = () => (
    <div className='app'>
    <h1>React Router Demo</h1>
    <Navigation />
    <Main />
    </div>
);

const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/api'>Api Call</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/contact'>Another page</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/game'>Game</NavLink></li>
      </ul>
    </nav>
  );


  const Home = () => (
    <div className='home'>
      <h1>Welcome to my portfolio website</h1>
      <p> Feel free to browse around and learn more about me.</p>
    </div>
  );

  const About = () => (
    <div className='about'>
      <h1>About Me</h1>
      <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
      <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    </div>
  );

  const Contact = () => (
    <div className='contact'>
      <h1>Contact Me</h1>
      <p>You can reach me via email: <strong>hello@example.com</strong></p>
    </div>
  );




  // ------------- Routes

  const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/api' component={ApiCall}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/game' component={Game}></Route>
    </Switch>
  );

export default App;