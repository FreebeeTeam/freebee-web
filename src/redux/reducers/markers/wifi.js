// @flow
import { handleActions } from 'redux-actions';
import { wifiActions } from '../../actions';

type State = {
  +markers: Array<{
    +location: Array<number>,
    +title: string,
    +description: string,
  }>,
  +error: Object,
  +isFetching: boolean,
};

const {
  getMarkersRequest,
  getMarkersSuccess,
  getMarkersError,
} = wifiActions;

const defaultState: State = {
  markers: [],
  error: {},
  isFetching: false,
};

const reducer = handleActions({
  [getMarkersRequest]: (state: State) => ({
    ...state,
    isFetching: true,
  }),
  [getMarkersSuccess]: (state: State, { payload: { wifis } }) => ({
    ...state,
    isFetching: false,
    markers: wifis,
  }),
  [getMarkersError]: (state: State, { payload: { error } }) => ({
    ...state,
    isFetching: false,
    error,
  }),

}, defaultState);

export default reducer;
