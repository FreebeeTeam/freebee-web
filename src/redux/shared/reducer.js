// @flow
import { handleActions } from 'redux-actions';
import _ from 'lodash';
import update from 'immutability-helper';
import { setError, setMapMode, setMapViewport } from './actions';
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM, MAP_MODES } from '../../config/map';

const defaultState = {
  errorList: [],

  mapMode: MAP_MODES.READ,

  mapViewport: {
    zoom: DEFAULT_MAP_ZOOM,
    center: DEFAULT_MAP_CENTER,
  },
};

const reducer = handleActions({
  [setError]: (state, { payload: { errorMessage, errorId } }) => {
    return update(state, {
      errorList: {
        $push: [{
          errorId,
          errorMessage,
        }],
      },
    });
  },
  [setMapMode]: (state, { payload: { mode } }) => {
    return update(state, {
      mapMode: {
        $set: mode,
      },
    });
  },
  [setMapViewport]: (state, { payload: { viewport } }) => {
    if (_.isEqual(_.sortBy(viewport), _.sortBy(state.mapViewport))) {
      return state;
    }
    
    return update(state, {
      mapViewport: {
        $set: viewport,
      },
    });
  },
}, defaultState);

export default reducer;
