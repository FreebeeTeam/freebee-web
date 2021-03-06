/* @flow */
import { createActions } from 'redux-actions';


const {
  markers: {
    wifi: {
      getMarkersRequest,
      getMarkersSuccess,
      getMarkersError,
    },
  },
} = createActions({
  MARKERS: {
    WIFI: {
      GET_MARKERS_REQUEST: () => {},
      GET_MARKERS_SUCCESS: wifi => ({ wifi }),
      GET_MARKERS_ERROR: error => ({ error }),
    },
  },
});

export {
  getMarkersRequest,
  getMarkersSuccess,
  getMarkersError,
};
