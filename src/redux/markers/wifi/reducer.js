/* @flow */
import { handleActions } from 'redux-actions';
import {
  getMarkersRequest,
  getMarkersSuccess,
  getMarkersError,
} from './actions';

export type State = {
  +markers: Array<{
    +location: number[],
    +title: string,
    +address: string,
    +description?: string,
  }>,
  +error: Object,
  +isFetching: boolean,
};

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
  [getMarkersSuccess]: (state: State, { payload: { wifi } }) => {
    const wifiToUpdate = wifi.map((w) => {
      const { location, ...rest } = w;
      const newLocation = location.coordinates;

      return {
        ...rest,
        location: newLocation,
      };
    });

    return {
      ...state,
      isFetching: false,
      markers: wifiToUpdate,
    };
  },
  [getMarkersError]: (state: State, { payload: { error } }) => ({
    ...state,
    isFetching: false,
    error,
  }),

}, defaultState);

export default reducer;
