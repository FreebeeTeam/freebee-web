import axios from 'axios';
import { createActions } from 'redux-actions';
import { api } from '../../../config';

const {
  markers: {
    wifis: {
      getMarkersRequest,
      getMarkersSuccess,
      getMarkersError,
    },
  },
} = createActions({
  MARKERS: {
    WIFIS: {
      GET_MARKERS_REQUEST: () => {},
      GET_MARKERS_SUCCESS: wifis => ({ wifis }),
      GET_MARKERS_ERROR: error => ({ error }),
    },
  },
});

const getWifiMarkers = () => async (dispatch) => {
  dispatch(getMarkersRequest());

  try {
    const response = await axios.get(api.wifis);
    dispatch(getMarkersSuccess(response.data));
  } catch (error) {
    console.error(error);
    dispatch(getMarkersError(error));
  }
};

export default {
  getWifiMarkers,
  getMarkersRequest,
  getMarkersSuccess,
  getMarkersError,
};
