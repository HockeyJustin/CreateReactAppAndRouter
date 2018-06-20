import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

export function Navigation()
{
    return(
        <nav>
            <ul>
              <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
              <li><NavLink exact activeClassName="current" to='/api'>Api Call</NavLink></li>
              <li><NavLink exact activeClassName="current" to='/contact'>Another page</NavLink></li>
              <li><NavLink exact activeClassName="current" to='/game'>Game</NavLink></li>
            </ul>
          </nav>);
}

export function Home()
{
    return(
        <div className='home'>
            <h1>Welcome to my portfolio website</h1>
            <p> Feel free to browse around and learn more about me.</p>
        </div>);
}
    
export function Contact()
{
    return(
        <div className='contact'>
            <h1>Contact Me</h1>
            <p>You can reach me via email: <strong>hello@example.com</strong></p>
        </div>);
}


