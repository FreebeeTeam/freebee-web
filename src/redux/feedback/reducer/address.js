/* @flow */
import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import {
  getAddressRequest,
  getAddressSuccess,
  getAddressError,

  resetAddress,
} from '../actions';

type State = {
  isFeedbackAddressLoading: boolean,
  feedbackAddressError?: any,
  suggestedAddress: any,
};

const defaultState: State = {
  suggestedAddress: null,
  feedbackAddressError: null,
  isFeedbackAddressLoading: false,
};

const reducer = handleActions({
  [getAddressRequest]: (state: State) => update(state, {
    isFeedbackAddressLoading: {
      $set: true,
    },
    feedbackAddressError: {
      $set: defaultState.feedbackAddressError,
    },
  }),
  [getAddressSuccess]: (state: State, { payload: { address } }) => update(state, {
    suggestedAddress: {
      $set: address,
    },
    isFeedbackAddressLoading: {
      $set: false,
    },
  }),
  [getAddressError]: (state: State, { payload: { error } }) => update(state, {
    isFeedbackAddressLoading: {
      $set: false,
    },
    feedbackAddressError: {
      $set: error,
    },
  }),

  [resetAddress]: (state: State) => update(state, {
    isFeedbackAddressLoading: {
      $set: defaultState.isFeedbackAddressLoading,
    },
    feedbackAddressError: {
      $set: defaultState.feedbackAddressError,
    },
    suggestedAddress: {
      $set: defaultState.suggestedAddress,
    },
  }),
}, defaultState);

export default reducer;
