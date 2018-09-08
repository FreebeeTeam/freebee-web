// @flow
import axios from 'axios';
import { createActions } from 'redux-actions';
import { api } from '../../../config';
import type { Feedback } from '../../../types/models';

const {
  feedback: {
    createFeedbackRequest,
    createFeedbackSuccess,
    createFeedbackError,
  },
} = createActions({
  FEEDBACK: {
    CREATE_FEEDBACK_REQUEST: (): void => {},
    CREATE_FEEDBACK_SUCCESS: (): void => {},
    CREATE_FEEDBACK_ERROR: (error): void => ({ error }),
  },
});

const createFeedback = (feedback: Feedback): void => async (dispatch) => {
  dispatch(createFeedbackRequest());

  try {
    await axios.post(api.feedback, feedback);
    dispatch(createFeedbackSuccess());
  } catch (error) {
    console.error(error);
    dispatch(createFeedbackError(error));
  }
};

export {
  createFeedback,
  createFeedbackRequest,
  createFeedbackSuccess,
  createFeedbackError,
};
