// @flow
import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import actions from './actions';

const {
  setCurrentLocation,
} = actions;

type State = {
  currentLocation: [] | null,
  locationError: string | null,
}

const defaultState: State = {
  currentLocation: null,
  locationError: null,
};

const reducer = handleActions({
  [setCurrentLocation.toString()]: (state: State, { payload: { locationOrError } }) => {
    if (typeof locationOrError === 'string') {
      return update(state, { locationError: { $set: locationOrError } });
    }
    return update(state, { currentLocation: { $set: locationOrError } });
  },
}, defaultState);

export default reducer;
