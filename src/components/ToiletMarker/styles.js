/* @flow */
import type { Styles } from '../../types/styles';

export default (): Styles => ({
  routeButton: {
    paddingTop: 0,
    paddingBottom: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  content: {
    width: 250,
    fontSize: 13,
  },
  point: {
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
  },
});
