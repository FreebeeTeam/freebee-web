/* @flow */
import { createActions } from 'redux-actions';
import { actions as toiletsActions } from './toilets';
import { actions as wifiActions } from './wifi';

const {
  markers: {
    setFilter,
    setNewMarkerPosition,
  },
} = createActions({
  MARKERS: {
    SET_FILTER: (filter: string | null): {} => ({ filter }),
    SET_NEW_MARKER_POSITION: (position: number[]) => ({ position }),
  },
});

export {
  setFilter,
  setNewMarkerPosition,
  toiletsActions,
  wifiActions,
};
