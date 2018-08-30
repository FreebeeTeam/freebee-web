import { createSelector } from 'reselect';

const rootSelector = state => state.markers;

const wifisSelector = createSelector(
  rootSelector,
  markers => markers.wifis.markers,
);
const toiletsSelector = createSelector(
  rootSelector,
  markers => markers.toilets,
);

export {
  wifisSelector,
  toiletsSelector,
};
