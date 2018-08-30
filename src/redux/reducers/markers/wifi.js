import { handleActions } from 'redux-actions';
import { wifiActions } from '../../actions';

const {
  getMarkersRequest,
  getMarkersSuccess,
  getMarkersError,
} = wifiActions;

const defaultState = {
  markers: [],
  error: {},
  isFetching: false,
};

const reducer = handleActions({
  [getMarkersRequest]: state => ({
    ...state,
    isFetching: true,
  }),
  [getMarkersSuccess]: (state, { payload: { wifis } }) => ({
    ...state,
    isFetching: false,
    markers: wifis,
  }),
  [getMarkersError]: (state, { payload: { error } }) => ({
    ...state,
    isFetching: false,
    error,
  }),

}, defaultState);

export default reducer;
