/* @flow */
import { createActions } from 'redux-actions';


const {
  markers: {
    sockets: {
      getMarkersRequest,
      getMarkersSuccess,
      getMarkersError,
    },
  },
} = createActions({
  MARKERS: {
    SOCKETS: {
      GET_MARKERS_REQUEST: () => {},
      GET_MARKERS_SUCCESS: sockets => ({ sockets }),
      GET_MARKERS_ERROR: error => ({ error }),
    },
  },
});

export {
  getMarkersRequest,
  getMarkersSuccess,
  getMarkersError,
};
