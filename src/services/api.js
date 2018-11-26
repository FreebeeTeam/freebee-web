/* @flow */
const base: string = process.env.REACT_APP_API;

const buildUrl = url => `${base}${url}`;

const feedback = {
  create: () => buildUrl('/feedback'),
};

const wifi = {
  get: () => buildUrl('/wifi'),
};

const toilets = {
  get: () => buildUrl('/toilets'),
};

export {
  feedback,
  wifi,
  toilets,
};
