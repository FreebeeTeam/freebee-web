/* @flow */
import { createSelector } from 'reselect';

const selectErrorsList = state => state.shared.errorList;

export const selectLastError = createSelector(
  selectErrorsList,
  (list) => {
    return list.length > 0 ? list[list.length - 1] : null;
  },
);

export const selectMapMode = state => state.shared.mapMode;
