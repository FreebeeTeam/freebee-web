// @flow
import { createActions } from 'redux-actions';

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
    CREATE_FEEDBACK_ERROR: (error: any): { error: any } => ({ error }),
  },
});

export {
  createFeedbackRequest,
  createFeedbackSuccess,
  createFeedbackError,
};
