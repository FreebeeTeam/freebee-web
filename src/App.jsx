// @flow

import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { createStore } from './redux';

import IndexPage from './views/index-page';
import FreebeeMapPage from './views/FreebeeMapPage';


const App = () => (
  <Provider store={createStore()}>
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/map" component={FreebeeMapPage} />
        </Switch>
      </>
    </Router>
  </Provider>
);

export default App;
