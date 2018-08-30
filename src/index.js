// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles/reset.css';
import './styles/global.css';

const root: ?Element = document.getElementById('root');

if (root) {
  // eslint-disable-next-line
  ReactDOM.render(<App />, root);
  registerServiceWorker();
}
