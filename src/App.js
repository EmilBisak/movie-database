import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import AppState from './store/AppState'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppState>
          <Header ime="Emil" />
          <Main />
          <Footer />
        </AppState>
      </div>

    );
  }
}

export default App;
