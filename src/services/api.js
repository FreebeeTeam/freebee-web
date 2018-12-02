/* @flow */
const baseApi: string = process.env.REACT_APP_API;
const baseHereRoutingApi = `
${process.env.REACT_APP_HERE_ROUTE_API}
?app_id=${process.env.REACT_APP_HERE_APP_ID}
&app_code=${process.env.REACT_APP_HERE_APP_CODE}`;

const buildApiUrl = (root: string) => (url: string) => `${root}${url}`;
const buildBackendApiUrl: (url: string) => string = buildApiUrl(baseApi);
const buildHereRoutingApiUrl: (url: string) => string = buildApiUrl(baseHereRoutingApi);

const feedback = {
  create: () => buildBackendApiUrl('/feedback'),
};

const wifi = {
  get: () => buildBackendApiUrl('/wifi'),
};

const toilets = {
  get: () => buildBackendApiUrl('/toilets'),
};

const routing = {
  getRoute: () => buildHereRoutingApiUrl(''),
};

export {
  feedback,
  wifi,
  toilets,
  routing,
};
