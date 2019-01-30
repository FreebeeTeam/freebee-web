/* @flow */
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as markersActions from './actions';
import toilets from './toilets';
import wifi from './wifi';

export type State = {
  +selected: string | null,
  newMarkerPosition: number[] | null,
};

const {
  setFilter,
  setNewMarkerPosition,
} = markersActions;

const defaultState: State = {
  selected: null,
  newMarkerPosition: null,
};

const reducer = handleActions({
  [setFilter]: (state: State, { payload: { filter } }) => ({
    ...state,
    selected: filter,
  }),
  [setNewMarkerPosition]: (state: State, { payload: { position } }) => ({
    ...state,
    newMarkerPosition: position,
  }),
}, defaultState);


export default combineReducers({
  shared: reducer,
  toilets,
  wifi,
});
