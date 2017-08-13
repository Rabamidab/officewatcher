import React, { Component } from 'react';
import Instascan from 'instascan';

class Camera extends Component {
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

  // componentWillUnmount() {
  //   scanner.removeListener();
  // }

  render() {
    return (
      <video ref={(video) => {this.videoRef = video}} />
    );
  }
}

export default Camera;
