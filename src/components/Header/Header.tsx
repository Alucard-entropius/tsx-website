import React from 'react';
import './Header.css';
import { Router, Link } from "react-router-dom";
import browserhistory from '../../browserhistory';


function Header() {
  return (
    <div className="Navbar">
    <Router history={browserhistory}>
    <Link to="/home"><li>Home</li></Link>
    <Link to="/home"><li>Youtube</li></Link>
    <Link to="/home"><li>About Me</li></Link>
    </Router>
    </div>
  );
}

export default Header;
