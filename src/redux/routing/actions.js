/* @flow */
import { createActions } from 'redux-actions';

const {
  routing: {
    getRouteRequest,
    getRouteSuccess,
    getRouteError,
  },
} = createActions({
  ROUTING: {
    GET_ROUTE_REQUEST: () => {},
    GET_ROUTE_SUCCESS: route => ({ route }),
    GET_ROUTE_ERROR: error => ({ error }),
  },
});

export {
  getRouteRequest,
  getRouteSuccess,
  getRouteError,
};
