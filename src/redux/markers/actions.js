// @flow
import { createActions } from 'redux-actions';
import { actions as toiletsActions } from './toilets';
import { actions as wifiActions } from './wifi';

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
  toiletsActions,
  wifiActions,
};
