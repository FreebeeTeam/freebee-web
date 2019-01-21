/* @flow */
import { createSelector } from 'reselect';

const rootSelector = state => state.errors;

export const selectLastError = createSelector(
  rootSelector,
  ({ list }) => {
    return list.length > 0 ? list[list.length - 1] : null;
  },
);
