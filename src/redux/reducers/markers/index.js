// @flow

import { combineReducers } from 'redux';
import wifis from './wifi';
import toilets from './toilets';

export default combineReducers({
  wifis,
  toilets,
});
