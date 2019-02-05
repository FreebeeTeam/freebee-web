/* @flow */
import { createActions } from 'redux-actions';
import shortId from 'shortid';

const {
  shared: {
    setError,
    setMapMode,
    setMapViewport,
  },
} = createActions({
  SHARED: {
    SET_ERROR: errorMessage => ({ errorId: shortId.generate(), errorMessage }),
    SET_MAP_MODE: mode => ({ mode }),
    SET_MAP_VIEWPORT: viewport => ({ viewport }),
  },
});

export {
  setError,
  setMapMode,
  setMapViewport,
};
