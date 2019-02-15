/* @flow */
import { createActions } from 'redux-actions';
import { actions as toiletsActions } from './toilets';
import { actions as wifiActions } from './wifi';

const {
  markers: {
    setFilter,
    setNewMarkerPosition,

    getTypesRequest,
    getTypesSuccess,
    getTypesError,
  },
} = createActions({
  MARKERS: {
    SET_FILTER: (filter: string | null): {} => ({ filter }),
    SET_NEW_MARKER_POSITION: (position: any) => {
      const location = [position.lat, position.lng];
      return { location };
    },

    GET_TYPES_REQUEST: () => {},
    GET_TYPES_SUCCESS: types => ({ types }),
    GET_TYPES_ERROR: error => ({ error }),
  },
});

export {
  setFilter,
  setNewMarkerPosition,

  getTypesRequest,
  getTypesSuccess,
  getTypesError,

  toiletsActions,
  wifiActions,
};
