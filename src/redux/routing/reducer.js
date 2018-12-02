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
  route: any,
  isFetching: boolean,
  error: any,
};

const defaultState: State = {
  route: null,
  isFetching: false,
  error: null,
};

const reducer = handleActions({
  [getRouteRequest]: (state: State) => update(state, {
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
