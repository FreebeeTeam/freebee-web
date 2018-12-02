/* @flow */
import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import {
  getRouteRequest,
  getRouteSuccess,
  getRouteError,
} from './actions';
import { actions as markersActions } from '../markers';

type State = {
  selectedMarker: any,
  route: any,
  isFetching: boolean,
  error: any,
};

const defaultState: State = {
  marker: null,
  route: null,
  isFetching: false,
  error: null,
};

const reducer = handleActions({
  [getRouteRequest]: (state: State, { payload: { marker } }) => update(state, {
    marker: { $set: marker },
    isFetching: { $set: true },
    error: { $set: defaultState.error },
  }),
  [getRouteSuccess]: (state: State, { payload: { route } }) => update(state, {
    isFetching: { $set: false },
    route: { $set: route },
  }),
  [getRouteError]: (state: State, { payload: { error } }) => update(state, {
    isFetching: { $set: false },
    error: { $set: error },
  }),
  [markersActions.setFilter]: (state: State, { payload: { filter } }) => {
    return !filter
      ? state
      : update(state, {
        error: {
          $set: null,
        },
        route: {
          $set: null,
        },
      });
  },
}, defaultState);

export default reducer;
