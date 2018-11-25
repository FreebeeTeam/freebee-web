// @flow

import { combineReducers } from 'redux';
import ui from './ui';
import markers from './markers';
import feedback from './feedback';
import user from '../user';

type State = {
  user: any,
  ui: any,
  markers: any,
  feedback: any
};

const reducers: State = {
  user,
  ui,
  markers,
  feedback,
};

export default combineReducers(reducers);
