// @flow
import { createSelector } from 'reselect';
import type { Wifi } from '../../types/models';

const rootSelector = state => state.markers;

const wifisSelector = createSelector(
  rootSelector,
  (markers): Wifi[] => markers.wifis.markers,
);

const toiletsSelector = createSelector(
  rootSelector,
  markers => markers.toilets.markers,
);

const isAllMarkersFetching = createSelector(
  rootSelector,
  markers => (
    markers.wifis.isFetching
    || markers.toilets.isFetching
  ),
);

export {
  wifisSelector,
  toiletsSelector,
  isAllMarkersFetching,
};
