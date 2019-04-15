/* @flow */
import axios from 'axios';
import { feedbackApi } from './api';
import type { HttpResponse, LocationGeoJSON } from './types';

export type Feedback = {
  title?: string | null,
  location: number[],
  author: string,
  address: string,
  type: number,
  password?: string | null,
  description?: string | null,
};

export type FeedbackRequestData = {
  title?: string | null,
  location: number[],
  author: string,
  address: string,
  type: number[],
  password?: string | null,
  description?: string | null,
};

export type FeedbackResponseData = {
  id: string,
  title?: string | null,
  location: LocationGeoJSON,
  author: string,
  address: string,
  type: number[],
  password?: string | null,
  description?: string | null,
  creationDate: string,
};

// eslint-disable-next-line import/prefer-default-export
export const createFeedback = (feedback: Feedback): Promise<HttpResponse<FeedbackResponseData>> => {
  const { type, ...rest } = feedback;
  const feedbackData: FeedbackRequestData = {
    ...rest,
    type: [type],
  };

  return axios.post(feedbackApi.create(), feedbackData);
};
