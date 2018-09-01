// @flow
import axios from 'axios';
import { createActions } from 'redux-actions';
import { api } from '../../../config';

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

const getToiletMarkers = () => async (dispatch) => {
  dispatch(getMarkersRequest());

  try {
    const response = await axios.get(api.toilets);
    dispatch(getMarkersSuccess(response.data));
  } catch (error) {
    console.error(error);
    dispatch(getMarkersError());
  }
};

export default {
  getToiletMarkers,
  getMarkersRequest,
  getMarkersSuccess,
  getMarkersError,
};
