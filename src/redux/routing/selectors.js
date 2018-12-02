/* @flow */
import { createSelector } from 'reselect';

const selectRouting = state => state.routing.route;

// eslint-disable-next-line import/prefer-default-export
export const selectRoute = createSelector(
  selectRouting,
  (route) => {
    return route ? route.leg : null;
  },
);
