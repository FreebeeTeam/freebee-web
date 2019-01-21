/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { createStore } from './redux';
import { notification } from './config';

import IndexPage from './views/index-page';
import FreebeeMapPage from './views/FreebeeMapPage';

const App = () => (
  <Provider store={createStore()}>
    <SnackbarProvider
      maxSnack={notification.MAX_SNACK}
      anchorOrigin={notification.ANCHOR}
    >
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/map" component={FreebeeMapPage} />
          </Switch>
        </>
      </Router>
    </SnackbarProvider>
  </Provider>
);

export default App;
