import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { createStore } from './redux';

import IndexPage from './pages/index-page';
import { MapPage } from './containers';


const App = () => (
  <Provider store={createStore()}>
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/map" component={MapPage} />
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>
);

export default App;
