/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { createStore } from './redux';
import { notification } from './config';
import FreebeeMapPage from './views/FreebeeMapPage';

const App = () => (
  <Provider store={createStore()}>
    <SnackbarProvider
      maxSnack={notification.MAX_SNACK}
      anchorOrigin={notification.ANCHOR}
    >
      <BrowserRouter basename="/map">
        <>
          <Switch>
            <Route path="/" component={FreebeeMapPage} />
          </Switch>
        </>
      </BrowserRouter>
    </SnackbarProvider>
  </Provider>
);

export default App;
