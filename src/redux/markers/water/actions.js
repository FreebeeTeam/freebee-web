/* @flow */
import { createActions } from 'redux-actions';


const {
  markers: {
    water: {
      getMarkersRequest,
      getMarkersSuccess,
      getMarkersError,
    },
  },
} = createActions({
  MARKERS: {
    WATER: {
      GET_MARKERS_REQUEST: () => {},
      GET_MARKERS_SUCCESS: water => ({ water }),
      GET_MARKERS_ERROR: error => ({ error }),
    },
  },
});

export {
  getMarkersRequest,
  getMarkersSuccess,
  getMarkersError,
};
