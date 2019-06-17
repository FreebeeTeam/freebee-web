/* @flow */
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as markersActions from './actions';
import toilets from './toilets';
import wifi from './wifi';
import sockets from './sockets';
import water from './water';

export type State = {
  +selected: string | null,
  newMarkerPosition: number[] | null,

  markerTypes: [],
  isMarkerTypesFetching: boolean,
  markerTypesError: any,
};

const {
  setFilter,
  setNewMarkerPosition,

  getTypesRequest,
  getTypesSuccess,
  getTypesError,
} = markersActions;

const defaultState: State = {
  selected: null,
  newMarkerPosition: null,

  markerTypes: [],
  isMarkerTypesFetching: false,
  markerTypesError: null,
};

const reducer = handleActions({
  [setFilter]: (state: State, { payload: { filter } }) => ({
    ...state,
    selected: filter,
  }),
  [setNewMarkerPosition]: (state: State, { payload: { location } }) => ({
    ...state,
    newMarkerPosition: location,
  }),

  [getTypesRequest]: (state: State) => ({
    ...state,
    isMarkerTypesFetching: true,
    markerTypesError: defaultState.markerTypesError,
  }),
  [getTypesSuccess]: (state: State, { payload: { types } }) => ({
    ...state,
    isMarkerTypesFetching: false,
    markerTypes: types,
  }),
  [getTypesError]: (state: State, { payload: { error } }) => ({
    ...state,
    isMarkerTypesFetching: false,
    markerTypesError: error,
  }),
}, defaultState);


export default combineReducers({
  shared: reducer,
  toilets,
  wifi,
  sockets,
  water,
});
