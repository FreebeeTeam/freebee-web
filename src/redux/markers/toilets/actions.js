/* @flow */
import { createActions } from 'redux-actions';

const {
  markers: {
    toilets: {
      getMarkersRequest,
      getMarkersSuccess,
      getMarkersError,
    },
  },
} = createActions({
  MARKERS: {
    TOILETS: {
      GET_MARKERS_REQUEST: () => {},
      GET_MARKERS_SUCCESS: toilets => ({ toilets }),
      GET_MARKERS_ERROR: error => ({ error }),
    },
  },
});

export {
  getMarkersRequest,
  getMarkersSuccess,
  getMarkersError,
};
