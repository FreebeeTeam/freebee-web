// @flow

import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { setError, setMapMode } from './actions';
import { MAP_MODES } from '../../config/map';

const defaultState = {
  errorList: [],

  mapMode: MAP_MODES.READ,
};

const reducer = handleActions({
  [setError]: (state, { payload: { errorMessage, errorId } }) => {
    return update(state, {
      errorList: {
        $push: [{
          errorId,
          errorMessage,
        }],
      },
    });
  },
  [setMapMode]: (state, { payload: { mode } }) => {
    return update(state, {
      mapMode: {
        $set: mode,
      },
    });
  },
}, defaultState);

export default reducer;
