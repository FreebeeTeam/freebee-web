import {
  getMarkersRequest,
  getMarkersSuccess,
  getMarkersError,
} from './actions';
import { markersService } from '../../../services';

const getToilets = () => async (dispatch) => {
  dispatch(getMarkersRequest());

  try {
    const { data } = await markersService.getToilets();
    dispatch(getMarkersSuccess(data));
  } catch (error) {
    console.error(error);
    dispatch(getMarkersError());
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getToilets,
};
