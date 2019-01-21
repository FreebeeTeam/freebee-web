import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { setError } from './actions';

const defaultState = {
  list: [],
};

const reducer = handleActions({
  [setError]: (state, { payload: { errorMessage, errorId } }) => update(state, {
    list: {
      $push: [{
        errorId,
        errorMessage,
      }],
    },
  }),
}, defaultState);

export default reducer;
