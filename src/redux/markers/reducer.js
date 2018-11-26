/* @flow */
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as markersActions from './actions';
import toilets from './toilets';
import wifi from './wifi';

export type State = {
  +selected: string | null,
};

const {
  setFilter,
} = markersActions;

const defaultState: State = {
  selected: null,
};

const reducer = handleActions({
  [setFilter]: (state: State, { payload: { filter } }) => ({
    ...state,
    selected: filter,
  }),
}, defaultState);


export default combineReducers({
  shared: reducer,
  toilets,
  wifi,
});
