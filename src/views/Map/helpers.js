/* @flow */

const getFlatPosition = (location) => {
  const { latitude, longitude } = location;

  return [latitude, longitude];
};

// eslint-disable-next-line import/prefer-default-export
export const getPositionsForPolyline = (route: any): Array<number[]> => {
  if (!route) {
    return [];
  }

  const buildedRoutes: Array<number[]> = route.maneuver.map(
    ({ position }) => getFlatPosition(position),
  );

  const startPosition = getFlatPosition(route.start.originalPosition);
  const endPosition = getFlatPosition(route.end.originalPosition);

  return [startPosition, ...buildedRoutes, endPosition];
};
