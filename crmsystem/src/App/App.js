import React, { Component } from 'react';
import axios from 'axios';

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
    axios.get('http://localhost:57024/api/v1/crmsys/values')
    .then((data) => {
      this.setState({ person: data });
      console.log(data);
    });
    // return "hello";
    
  
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
