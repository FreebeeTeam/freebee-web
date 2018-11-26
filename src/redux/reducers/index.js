/* @flow */

import { combineReducers } from 'redux';
import ui from './ui';

type State = {
  user: any,
  ui: any,
  markers: any,
  feedback: any
};

const reducers: State = {
  ui,
};

export default combineReducers(reducers);
