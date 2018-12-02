/* @flow */
import {
  getRouteRequest,
  getRouteSuccess,
  getRouteError,
} from './actions';
import { routingService } from '../../services';
import { getFormattedRoute } from './helpers';

// eslint-disable-next-line import/prefer-default-export
export const getRoute = (point0, point1) => async (dispatch) => {
  dispatch(getRouteRequest());

  try {
    const { data } = await routingService.getRoute(point0, point1);
    const route = getFormattedRoute(data);

    dispatch(getRouteSuccess(route));
  } catch (error) {
    console.error(error);
    dispatch(getRouteError(error));
  }
};
