// @flow
import { createActions } from 'redux-actions';

const {
  markers: {
    setFilter,
  },
} = createActions({
  MARKERS: {
    SET_FILTER: (filter: string | null): {} => ({ filter }),
  },
});

export {
  setFilter,
};
