// @flow

export type LocationGeoJSON = {
  type: 'Point',
  coordinates: number[],
};

export type HttpResponse<T> = {
  data: T,
  status: number,
  statusText: string,
  headers: {},
  config: {},
  request: XMLHttpRequest
};
