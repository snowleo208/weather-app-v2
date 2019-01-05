import React, { Component } from 'react';
import '../stylesheets/main.sass';
import Weather from './Weather';
import '@babel/register';
import '@babel/polyfill';

class App extends Component {
  render() {
    return <Weather />;
  }
}

export default App;
