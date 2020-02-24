import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import logo from '../assets/cinema.png';
import { Link } from 'react-router-dom';
import { withAppContext } from '../store/AppContext';

import './Header.css';

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
}

class Header extends Component {

  state = {
    password: "",
    isLoggedIn: false
  }

  loginInputRef;

  handleLoginInput = event => {
    this.setState({ password: event.target.value })
  }

  handleLoginAndLogout = () => {
    if (!!window.localStorage.getItem("isLoggedIn")) {
      this.props.global.logout();
    } else {
      this.props.global.login(this.state.password.toLowerCase());
    }
  }

  render() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    return (
      <header className="App-header">
        <nav>
          <div className="login-holder">
            <input type="text" placeholder={isLoggedIn ? "Ulogovani ste" : "Ulogujte se"} onChange={this.handleLoginInput} disabled={isLoggedIn} value={isLoggedIn ? "Ulogovani ste" : this.state.password} />
            <span className="login-button" onClick={() => this.handleLoginAndLogout(this.state.password)}>
              <img src={isLoggedIn ? "logout.png" : "key.png"} alt="key" />
            </span>
          </div>
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

export default withRouter(withAppContext(Header));