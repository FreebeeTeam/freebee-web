/* @flow */
import { createSelector } from 'reselect';

const selectRouting = state => state.routing.route;

// eslint-disable-next-line import/prefer-default-export
export const selectRouteParts = createSelector(
  selectRouting,
  ({ leg }) => {
    return leg.maneuver;
  },
);
