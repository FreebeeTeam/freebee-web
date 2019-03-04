/* @flow */
import axios from 'axios';
import { feedbackApi } from './api';

// eslint-disable-next-line import/prefer-default-export
export const createFeedback = (feedback: any) => {
  return axios.post(feedbackApi.create(), {
    ...feedback,
    type: [feedback.type],
  });
};
