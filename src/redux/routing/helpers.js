/* @flow */
// eslint-disable-next-line import/prefer-default-export
export const getFormattedRoute = ({ response }) => {
  const { route } = response;
  const { leg, summary } = route[0];

  return { leg: leg[0], summary };
};
