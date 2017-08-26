import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

import './Header.css';



class Header extends Component {
  render() {
    return (
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

          <nav>
            <ul>
              <li><Link to="/">Sign in</Link></li>
              <li><Link to="/sign-up">Sign up</Link></li>
              <li><Link to="/users">Users</Link></li>
            </ul>
          </nav>
        </header>
      
    );
  }
}

export default Header;
