import React, { Component } from 'react';
import Instascan from 'instascan';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    let scanner = new Instascan.Scanner({ video: this.videoRef });
    scanner.addListener('scan', function (content) {
      console.log(content);
    });
    Instascan.Camera.getCameras().then(function (cameras) {
      if (cameras.length > 0) {
        scanner.start(cameras[0]);
      } else {
        console.error('No cameras found.');
      }
    }).catch(function (e) {
      console.error(e);
    });
  }
  render() {
    return (
      <div className="App">
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <video ref={(video) => {this.videoRef = video}} />
      </div>
    );
  }
}

export default App;
