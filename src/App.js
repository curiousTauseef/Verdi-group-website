import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import Body from './Body'
import Service from './Services'
import Verdi from './VerdiGroup'

// import NavLeft from './NavLeft'
// import NavRight from './NavRight'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <Body />
      <Verdi />
      <Service />
      </div>
    );
  }
}

export default App;
