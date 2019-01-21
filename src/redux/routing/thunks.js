/* @flow */
import {
  getRouteRequest,
  getRouteSuccess,
  getRouteError,
} from './actions';
import { routingService } from '../../services';
import { getFormattedRoute } from './helpers';

// eslint-disable-next-line import/prefer-default-export
export const getRoute = (userLocation, marker) => async (dispatch) => {
  const { location } = marker;
  dispatch(getRouteRequest(marker));

  try {
    const data = await routingService.getRoute(userLocation, location);
    const route = getFormattedRoute(data.data);

    dispatch(getRouteSuccess(route));
  } catch (error) {
    dispatch(getRouteError(error));
  }
};
