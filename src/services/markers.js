/* @flow */
import axios from 'axios';
import { wifi as wifiApi, toilets as toiletsApi } from './api';

// eslint-disable-next-line import/prefer-default-export
export const getWifi = () => axios.get(wifiApi.get());

export const getToilets = () => axios.get(toiletsApi.get());
