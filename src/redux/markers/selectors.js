/* @flow */
import { createSelector } from 'reselect';
import type { Wifi } from '../../types/models';
import type { State } from './reducer';

type Selector = (state: {}) => any;

const rootSelector: Selector = (state): State => state.markers;

export const selectWifi: Selector = createSelector(
  rootSelector,
  (markers: State): Wifi[] => markers.wifi.markers,
);

export const selectToilets: Selector = createSelector(
  rootSelector,
  (markers: State) => markers.toilets.markers,
);

export const selectIsAllMarkersFetching: Selector = createSelector(
  rootSelector,
  (markers: State): boolean => {
    return (
      markers.wifi.isFetching
    || markers.toilets.isFetching
    );
  },
);

export const selectFilter: Selector = createSelector(
  rootSelector,
  (markers: State) => markers.shared.selected,
);
