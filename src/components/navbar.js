import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/about'} className="nav-link">About</Link></li>
          <li><Link className="button-main" to="/">Button</Link></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
