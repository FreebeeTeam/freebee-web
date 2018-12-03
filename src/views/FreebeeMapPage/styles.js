/* @flow */
import type { Styles } from '../../types/styles';

export default (): Styles => ({
  progress: {
    position: 'absolute',
    width: '100%',
    zIndex: 1005,
  },
  filterButton: {
    position: 'absolute',
    top: '2%',
    zIndex: 1001,
  },
  routePanel: {
    position: 'absolute',
    height: 'auto',
    zIndex: 1001,
  },
  userLocationButton: {
    position: 'absolute',
    zIndex: 1002,
  },
  contactUs: {
    fontFamily: '\'Roboto Condensed\', Arial, Helvetica, sans-serif',
    fontWeight: 'bold',
    width: '100%',
  },
  contactUsDesktop: {
    display: 'none',
  },
  '@media only screen and (min-width: 768px)': {
    contactUs: {
      display: 'none',
    },
    userLocationButton: {
      right: '2%',
      bottom: '10%'
    },
    filterButton: {
      right: '2%',
    },
    contactUsDesktop: {
      display: 'inline-flex',
      position: 'absolute',
      zIndex: 1001,
      right: '2%',
      bottom: '4%',
      color: 'black',
      fontFamily: "'Roboto Condensed', Arial, Helvetica, sans-serif",
      fontWeight: 'bold',
    },
    routePanel: {
      left: '2%',
      top: '2%',
      width: '15em'
    },
  },
  '@media only screen and (max-width: 768px)': {
    userLocationButton: {
      left: '4%',
      top: '2%',
    },
    filterButton: {
      right: '4%',
    },
    routePanel: {
      bottom: '0',
      width: '100%',
    },
  }
});
