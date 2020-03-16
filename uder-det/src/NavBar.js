import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="forNavBar">
        <Link to="/insert" className="navbar-brand" className="Links">Insert</Link>
        <Link to="/search" className="navbar-brand" className="Links">Search</Link>
      </nav>      
    );
  }
}