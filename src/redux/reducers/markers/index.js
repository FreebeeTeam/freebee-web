// @flow

import { combineReducers } from 'redux';
import wifis from './wifi';
import toilets from './toilets';
import filter from './filter';

import type { State as FilterState } from './filter';
import type { State as ToiletsState } from './toilets';
import type { State as WifiState } from './wifi';

export type State = {
  wifis: WifiState,
  toilets: ToiletsState,
  filter: FilterState,
};

const reducers: State = {
  wifis,
  toilets,
  filter,
};

export default combineReducers(reducers);
