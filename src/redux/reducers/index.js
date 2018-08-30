// @flow

import { combineReducers } from 'redux';
import ui from './ui';
import markers from './markers';

export default combineReducers({
  ui,
  markers,
});
