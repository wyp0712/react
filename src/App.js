import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import ajax from './util/ajax/ajax';


function GetData() {
  axios.get('/msg').then(res => {
    console.log(res, 'res')
    if (res.status === 200) {
      console.log(res.data, 'res')
    }
  })
  // ajax({
  //   url: '/msg',
  //   method: 'get'
  // }).then(res => {
  //   console.log(res)
  // })
}
GetData()

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
