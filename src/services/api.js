/* @flow */
const baseApi: string = process.env.REACT_APP_API || '';

const buildApiUrl = (root: string) => (url: string) => `${root}${url}`;
const buildBackendApiUrl: (url: string) => string = buildApiUrl(baseApi);

export const feedbackApi = {
  create: (): string => buildBackendApiUrl('/feedback'),
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
  getRoute: () => buildBackendApiUrl('/route'),
};

export const geocodingApi = {
  getAddressFromCoordinates: (lat: number, lng: number) => buildBackendApiUrl(
    `/location/geocoding/reverse/${lat}/${lng}`,
  ),
};
