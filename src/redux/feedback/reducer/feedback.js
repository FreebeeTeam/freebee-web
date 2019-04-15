/* @flow */
import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import {
  createFeedbackRequest,
  createFeedbackSuccess,
  createFeedbackError,
} from '../actions';

type State = {
  isLoading: boolean,
  error?: {},
  feedback: any,
};

const defaultState: State = {
  feedback: null,
  error: {},
  isLoading: false,
};

const reducer = handleActions({
  [createFeedbackRequest]: (state: State) => update(state, {
    isLoading: {
      $set: true,
    },
  }),
  [createFeedbackSuccess]: (state: State) => update(state, {
    isLoading: {
      $set: false,
    },
  }),
  [createFeedbackError]: (state: State, { payload: { error } }) => update(state, {
    isLoading: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),
}, defaultState);

export default reducer;
