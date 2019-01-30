import {
  getTypesRequest,
  getTypesSuccess,
  getTypesError,
} from './actions';
import { thunks as toiletsThunks } from './toilets';
import { thunks as wifiThunks } from './wifi';
import { markersService } from '../../services';

const { getWifi } = wifiThunks;
const { getToilets } = toiletsThunks;

export const getMarkers = () => async (dispatch) => {
  await Promise.all([
    dispatch(getWifi()),
    dispatch(getToilets()),
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
};
