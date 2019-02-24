/* @flow */
import { feedbackService } from '../../services';
import {
  createFeedbackRequest,
  createFeedbackSuccess,
  createFeedbackError,
} from './actions';
import type { Feedback } from '../../types/models';

export const createFeedback = (feedback: Feedback) => async (dispatch) => {
  dispatch(createFeedbackRequest());

  try {
    await feedbackService.createFeedback(feedback);
    dispatch(createFeedbackSuccess());
  } catch (error) {
    console.error(error);
    dispatch(createFeedbackError(error));

    throw error;
  }
};
