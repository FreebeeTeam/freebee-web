/* @flow */
import { feedbackService, locationService } from '../../services';
import {
  createFeedbackRequest,
  createFeedbackSuccess,
  createFeedbackError,

  getAddressRequest,
  getAddressSuccess,
  getAddressError,
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

export const getAddressFromCoordinates = (coordinates: number[]) => async (dispatch) => {
  dispatch(getAddressRequest());

  try {
    const { data } = await locationService.getAddress(coordinates[0], coordinates[1]);
    dispatch(getAddressSuccess(data));
  } catch (error) {
    console.error(error);
    dispatch(getAddressError(error));

    throw error;
  }
};
