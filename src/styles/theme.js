// @flow

import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f4c844',
    },
    secondary: {
      main: '#e53935',
    },
  },
  typography: { useNextVariants: true },
});

export default theme;
