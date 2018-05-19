import React, { Component } from 'react';
import '../stylesheets/main.css';
import Weather from './Weather';
require("babel-core/register");
require("babel-polyfill");

class App extends Component {
  render() {
    return (
      <Weather />
    );
  }
}

export default App;
