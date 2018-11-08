import React, { Component } from 'react'
import logo from '../assets/cinema.png';
import { Link } from 'react-router-dom';

import './Header.css';

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
}

export default class Header extends Component {

  state = {
    password: ""
  }

  render() {
    return (
      <header className="App-header">
        <nav>

          <input type='text' placeholder='Login' />

          <span>
          <Link to="/" style={linkStyle}>Početna</Link>
          <Link to="/addMovie" style={linkStyle}>Dodaj film</Link>
          </span>
        </nav>
        <div><Link to="/"><img className="App-logo" src={logo} alt="logo" /> <h1>Baza filmova</h1></Link></div>

      </header>
    )
  }
}
