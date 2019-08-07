/* @flow */
import axios from 'axios';
import {
  markersApi,
  wifiApi,
  toiletsApi,
  socketsApi,
  waterApi,
} from './api';

export const getWifi = (): Promise<any> => {
  return axios.get(wifiApi.get());
};

export const getToilets = (): Promise<any> => {
  return axios.get(toiletsApi.get());
};

export const getSockets = (): Promise<any> => {
  return axios.get(socketsApi.get());
};

export const getWater = (): Promise<any> => {
  return axios.get(waterApi.get());
};

export const getMarkerTypes = (): Promise<any> => {
  return axios.get(markersApi.getTypes());
};
