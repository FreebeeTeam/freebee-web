/* @flow */
import type { Styles } from '../../types/styles';

export default (): Styles => ({
  map: {
    width: '100%',
    // 36px - medium height button
    height: 'calc(100% - 36px)',
  },
  '@media only screen and (min-width: 768px)': {
    map: {
      height: '100vh',
    },
  },
});

export const ROUTE_COLOR = '#3f51b5';
