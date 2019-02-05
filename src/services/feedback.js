/* @flow */
import axios from 'axios';
import { feedback as api } from './api';

// eslint-disable-next-line import/prefer-default-export
export const createFeedback = (feedback: any) => axios.post(api.create(), feedback);
