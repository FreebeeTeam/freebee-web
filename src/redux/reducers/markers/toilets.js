// @flow
import { handleActions } from 'redux-actions';
import { toiletsActions } from '../../actions';

export type State = {
  +markers: Array<{
    +location: number[],
    +address: string,
    +description?: string,
  }>,
  +error: Object,
  +isFetching: boolean,
};

const {
  getMarkersRequest,
  getMarkersSuccess,
  getMarkersError,
} = toiletsActions;

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
  [getMarkersSuccess]: (state: State, { payload: { toilets } }) => ({
    ...state,
    isFetching: false,
    markers: toilets,
  }),
  [getMarkersError]: (state: State, { payload: { error } }) => ({
    ...state,
    isFetching: false,
    error,
  }),

}, defaultState);

export default reducer;
