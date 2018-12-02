/* @flow */
import axios from 'axios';
import { routing } from './api';

const PREFIX = 'geo!';
const MODE_COMPONENTS = {
  type: 'balanced',
  transportModes: 'pedestrian',
  trafficMode: 'traffic:disabled',
};

// eslint-disable-next-line import/prefer-default-export
export const getRoute = (point0: number[], point1: number[]) => {
  const waypoint0 = `${PREFIX}${point0.join(',')}`;
  const waypoint1 = `${PREFIX}${point1.join(',')}`;

  const mode = Object.values(MODE_COMPONENTS).join(';');

  return axios.get(routing.getRoute(), {
    params: {
      waypoint0,
      waypoint1,
      mode,
    },
  });
};
