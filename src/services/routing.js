/* @flow */
import axios from 'axios';
import { routingApi } from './api';

type GetRouteRequestData = {
  point0: number[],
  point1: number[],
};

// eslint-disable-next-line import/prefer-default-export
export const getRoute = (point0: number[], point1: number[]): Promise<any> => {
  const data: GetRouteRequestData = {
    point0,
    point1,
  };

  return axios.post(routingApi.getRoute(), data);
};
