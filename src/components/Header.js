import React, { Component } from 'react'
import logo from '../assets/cinema.png';
import { Link } from 'react-router-dom';

import './Header.css';

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
}

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <nav>
          <Link to="/" style={linkStyle}>Home</Link>{"  "}
          <Link to="/addMovie" style={linkStyle}>Add Movie</Link>
        </nav>
        <div><Link to="/"><img className="App-logo" src={logo} alt="logo" /> <h1>Baza filmova</h1></Link></div>

      </header>
    )
  }
}
