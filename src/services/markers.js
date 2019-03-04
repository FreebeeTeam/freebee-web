/* @flow */
import axios from 'axios';
import {
  markersApi,
  wifiApi,
  toiletsApi,
  socketsApi,
} from './api';

// eslint-disable-next-line import/prefer-default-export
export const getWifi = () => axios.get(wifiApi.get());

export const getToilets = () => axios.get(toiletsApi.get());

export const getSockets = () => axios.get(socketsApi.get());

export const getMarkerTypes = () => axios.get(markersApi.getTypes());
