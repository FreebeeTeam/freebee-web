/* @flow */
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
  [setCurrentLocation.toString()]: (state: State, { payload: { currentLocation } }) => {
    return update(state, {
      currentLocation: {
        $set: currentLocation,
      },
    });
  },
}, defaultState);

export default reducer;
