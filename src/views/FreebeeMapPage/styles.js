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
    right: '4%',
    zIndex: 1001,
  },
  routePanel: {
    height: '100%',
  },
  userLocationButton: {
    position: 'absolute',
    right: '4%',
    bottom: '10%',
    zIndex: 1001,
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
  },
});
