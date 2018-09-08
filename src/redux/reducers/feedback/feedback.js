// @flow
import { handleActions } from 'redux-actions';
import { feedbackActions } from '../../actions';

type State = {
  isLoading: boolean,
  error?: {},
};

const {
  createFeedbackRequest,
  createFeedbackSuccess,
  createFeedbackError,
} = feedbackActions;

const defaultState: State = {
  feedback: [],
  error: {},
  isLoading: false,
};

const reducer = handleActions({
  [createFeedbackRequest]: (state: State) => ({
    ...state,
    isLoading: true,
  }),
  [createFeedbackSuccess]: (state: State) => ({
    ...state,
    isLoading: false,
  }),
  [createFeedbackError]: (state: State, { payload: { error } }) => ({
    ...state,
    isLoading: false,
    error,
  }),
}, defaultState);

export default reducer;
