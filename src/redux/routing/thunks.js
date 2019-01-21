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
    console.log('routing')
    console.log(data)
    const route = getFormattedRoute(data.data);

    dispatch(getRouteSuccess(route));
  } catch (error) {
    console.error(error);
    console.log(error);
    dispatch(getRouteError(error));
  }
};
