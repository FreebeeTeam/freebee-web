// @flow

import { combineReducers } from 'redux';
import ui from './ui';
import markers from './markers';
import feedback from './feedback';

type State = {
  ui: {},
  markers: {},
  feedback: {}
};

const reducers: State = {
  ui,
  markers,
  feedback,
};

export default combineReducers(reducers);
