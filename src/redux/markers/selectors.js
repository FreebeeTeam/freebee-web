// @flow
import { createSelector } from 'reselect';
import type { Wifi } from '../../types/models';
import type { State } from './reducer';

type Selector = (state: {}) => any;

const rootSelector: Selector = (state): State => state.markers;

const wifisSelector: Selector = createSelector(
  rootSelector,
  (markers: State): Wifi[] => markers.wifi.markers,
);

const toiletsSelector: Selector = createSelector(
  rootSelector,
  (markers: State) => markers.toilets.markers,
);

const isAllMarkersFetching: Selector = createSelector(
  rootSelector,
  (markers: State): boolean => {
    return (
      markers.wifi.isFetching
    || markers.toilets.isFetching
    );
  },
);

const filterSelector: Selector = createSelector(
  rootSelector,
  (markers: State) => markers.shared.selected,
);

export {
  wifisSelector,
  toiletsSelector,
  isAllMarkersFetching,
  filterSelector,
};
