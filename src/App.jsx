/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import { createStore } from './redux';
import { notification } from './config';
import theme from './styles/theme';
import FreebeeMapPage from './views/FreebeeMapPage';

const App = () => (
  <Provider store={createStore()}>
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>
  </Provider>
);

export default App;
