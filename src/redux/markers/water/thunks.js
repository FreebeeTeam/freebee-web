import {
  getMarkersRequest,
  getMarkersSuccess,
  getMarkersError,
} from './actions';
import { markersService } from '../../../services';

const getWater = () => async (dispatch) => {
  dispatch(getMarkersRequest());

  try {
    const { data } = await markersService.getWater();
    dispatch(getMarkersSuccess(data));
  } catch (error) {
    console.error(error);
    dispatch(getMarkersError(error));
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getWater,
};
