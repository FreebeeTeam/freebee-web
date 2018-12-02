/* @flow */
// eslint-disable-next-line import/prefer-default-export
export const getPositionsForPolyline = (routeComponents: []): number[] => {
  return routeComponents.map((component) => {
    const { position: { latitude, longitude } } = component;

    return [latitude, longitude];
  });
};
