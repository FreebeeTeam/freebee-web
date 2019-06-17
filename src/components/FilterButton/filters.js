// @flow

type MarkerFilterOption = {
  label: string,
  value: number | null,
};

export type MarkerFilters = {
  [string]: MarkerFilterOption,
};

export const MARKER_FILTERS: MarkerFilters = {
  all: { label: 'all', value: null },
  wifi: { label: 'wifi', value: 1 },
  toilet: { label: 'toilet', value: 2 },
  socket: { label: 'socket', value: 3 },
  water: { label: 'water', value: 4 },
};
