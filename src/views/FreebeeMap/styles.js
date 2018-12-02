/* @flow */
import type { Styles } from '../../types/styles';

export default (): Styles => ({
  map: {
    width: '100%',
    // 70px - route panel height
    height: 'calc(100% - 70px)',
  },
  '@media only screen and (min-width: 768px)': {
    map: {
      height: '100vh',
    },
  },
});

export const ROUTE_COLOR = '#3f51b5';
