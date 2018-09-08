// @flow

import { combineReducers } from 'redux';
import ui from './ui';
import markers from './markers';
import feedback from './feedback';

export default combineReducers({
  ui,
  markers,
  feedback,
});
