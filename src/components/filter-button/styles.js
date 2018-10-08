// @flow
import type { Styles } from '../../types/styles';

export default (): Styles => ({
  filterButton: {
    position: 'absolute',
    top: '2%',
    left: '4%',
    zIndex: 1001,
  },
  '@media only screen and (min-width: 768px)': {
    filterButton: {
      top: '2%',
      left: '2%',
    },
  },
});
