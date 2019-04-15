/* @flow */
const baseApi: string = process.env.REACT_APP_API;
const baseHereRoutingApi = `
${process.env.REACT_APP_HERE_ROUTE_API}
?app_id=${process.env.REACT_APP_HERE_APP_ID}
&app_code=${process.env.REACT_APP_HERE_APP_CODE}`;

const buildApiUrl = (root: string) => (url: string) => `${root}${url}`;
const buildBackendApiUrl: (url: string) => string = buildApiUrl(baseApi);
const buildHereRoutingApiUrl: (url: string) => string = buildApiUrl(baseHereRoutingApi);

export const feedbackApi = {
  create: () => buildBackendApiUrl('/feedback'),
};

export const wifiApi = {
  get: () => buildBackendApiUrl('/wifi'),
};

export const toiletsApi = {
  get: () => buildBackendApiUrl('/toilets'),
};

export const socketsApi = {
  get: () => buildBackendApiUrl('/sockets'),
};

export const markersApi = {
  getTypes: () => buildBackendApiUrl('/markers/types'),
};

export const routingApi = {
  getRoute: () => buildHereRoutingApiUrl(''),
};

export const geocodingApi = {
  getAddressFromCoordinates: (lat: number, lng: number) => buildBackendApiUrl(
    `/location/geocoding/reverse/${lat}/${lng}`,
  ),
};
