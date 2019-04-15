// @flow
import axios from 'axios';
import { geocodingApi } from './api';

// eslint-disable-next-line import/prefer-default-export
export const getAddress = (lat: number, lng: number) => {
  return axios.get(geocodingApi.getAddressFromCoordinates(lat, lng));
};
