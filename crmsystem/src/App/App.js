import React, { Component } from 'react';

import AuthService from './services/authService';

import logo from './assets/img/logo.svg';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {person: []};
  }  

  componentDidMount() {
    this.Value();
  }

  Value() {
    
    AuthService.getValue(this.params)
    .then(
      (data) => {
        console.log(data);
      }
    )

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
