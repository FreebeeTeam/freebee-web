/* @flow */
// eslint-disable-next-line import/prefer-default-export
export const getPositionsForPolyline = (
  userLocation: number[],
  routeComponents: [],
): Array<number[]> => {
  if (!userLocation) {
    return [];
  }

  const buildedRoutes: Array<number[]> = routeComponents.map((component) => {
    const { position: { latitude, longitude } } = component;

    return [latitude, longitude];
  });

  return [userLocation, ...buildedRoutes];
};
