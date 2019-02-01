import { createMuiTheme, colors } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f4c844',
      secondary: colors.pink[400],
      error: colors.red[400],

      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
    secondary: {
      main: '#e53935',
    },
  },
});

export default theme;
