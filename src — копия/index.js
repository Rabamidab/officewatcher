import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router';

import './index.css';
// import App from './App';
import App from './containers/App/App';
// import App from 'src/containers/App/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
