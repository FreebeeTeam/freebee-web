// @flow
import axios from 'axios';
import { geocodingApi } from './api';
import type { HttpResponse, LocationGeoJSON } from './types';

type SuggestedAddressComponents = {
  city: string,
  district: string | null,
  suburb: string | null,
  street: string | null,
  house: string | null,
  name: string | null,
};

export type SuggestedAddress = {
  point: LocationGeoJSON,
  address: SuggestedAddressComponents,
};

// eslint-disable-next-line import/prefer-default-export
export const getAddress = (lat: number, lng: number): Promise<HttpResponse<SuggestedAddress>> => {
  return axios.get(geocodingApi.getAddressFromCoordinates(lat, lng));
};
