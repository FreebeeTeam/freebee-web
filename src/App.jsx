import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  Index as IndexPage,
  FreebeeMap,
} from './pages';

const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/map" component={FreebeeMap} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
