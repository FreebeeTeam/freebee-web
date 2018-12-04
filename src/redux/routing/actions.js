/* @flow */
import { createActions } from 'redux-actions';

const {
  routing: {
    getRouteRequest,
    getRouteSuccess,
    getRouteError,

    resetRoute,
  },
} = createActions({
  ROUTING: {
    GET_ROUTE_REQUEST: marker => ({ marker }),
    GET_ROUTE_SUCCESS: route => ({ route }),
    GET_ROUTE_ERROR: error => ({ error }),

    RESET_ROUTE: () => {},
  },
});

export {
  getRouteRequest,
  getRouteSuccess,
  getRouteError,

  resetRoute,
};
