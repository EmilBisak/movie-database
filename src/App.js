import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header ime="Emil"/>
        <Main />
        <Footer />
        
      </div>

    );
  }
}

export default App;
