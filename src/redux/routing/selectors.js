/* @flow */
import { createSelector } from 'reselect';

const selectRouting = state => state.routing.route;
const selectMarkerForRouting = state => state.routing.marker;

// eslint-disable-next-line import/prefer-default-export
export const selectRoute = createSelector(
  selectRouting,
  (route) => {
    return route ? route.leg : null;
  },
);

export const selectRouteSummary = createSelector(
  [selectRouting, selectMarkerForRouting],
  (route, marker) => (route ? { summary: route.summary, marker } : null),
);
