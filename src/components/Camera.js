import React, { PureComponent } from 'react';
import Instascan from 'instascan';

class Camera extends PureComponent {
  componentDidMount() {
    this.scanner = new Instascan.Scanner({ video: this.videoRef });

    this.scanner.addListener('scan', function (content) {
      console.log(content);
    });
    Instascan.Camera.getCameras().then(function (cameras) {
      if (cameras.length > 0) {
        this.scanner.start(cameras[0]);
      } else {
        console.error('No cameras found.');
      }
    }).catch(function (e) {
      console.error(e);
    });
  }

  componentWillUnmount() {
    this.scanner = null;
  }

  render() {
    return (
      <video ref={(video) => {this.videoRef = video}} />
    );
  }
}

export default Camera;
