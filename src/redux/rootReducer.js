/* @flow */

import { combineReducers } from 'redux';
import ui from './reducers/ui';
import markers from './markers';
import feedback from './feedback';
import user from './user';
import routing from './routing';
import shared from './shared';

type State = {
  user: any,
  ui: any,
  markers: any,
  feedback: any,
  routing: any,
  errors: any,
};

const reducers: State = {
  user,
  ui,
  markers,
  feedback,
  routing,
  shared,
};

export default combineReducers(reducers);
