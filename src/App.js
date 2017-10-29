import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './containers/Home';
import Portfolio from './containers/Portfolio';
import Services from './containers/Services';
import Contacts from './containers/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Portfolio />
        <Services />
        <Contacts />
      </div>
    );
  }
}

export default App;
