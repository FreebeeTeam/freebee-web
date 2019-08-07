import {
  getTypesRequest,
  getTypesSuccess,
  getTypesError,
} from './actions';
import { thunks as toiletsThunks } from './toilets';
import { thunks as wifiThunks } from './wifi';
import { socketsThunks } from './sockets';
import { waterThunks } from './water';
import { markersService } from '../../services';

export const getMarkers = () => async (dispatch) => {
  await Promise.all([
    dispatch(wifiThunks.getWifi()),
    dispatch(toiletsThunks.getToilets()),
    dispatch(socketsThunks.getSockets()),
    dispatch(waterThunks.getWater()),
  ]);
};

export const getMarkerTypes = () => async (dispatch) => {
  dispatch(getTypesRequest());

  try {
    const { data } = await markersService.getMarkerTypes();
    dispatch(getTypesSuccess(data));
  } catch (e) {
    console.error(e);
    dispatch(getTypesError(e));
  }
};

export {
  wifiThunks,
  toiletsThunks,
  socketsThunks,
  waterThunks,
};
