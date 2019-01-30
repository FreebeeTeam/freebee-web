/* @flow */
import { createActions } from 'redux-actions';
import shortId from 'shortid';

const {
  shared: {
    setError,
    setMapMode,
  },
} = createActions({
  SHARED: {
    SET_ERROR: errorMessage => ({ errorId: shortId.generate(), errorMessage }),
    SET_MAP_MODE: mode => ({ mode }),
  },
});

export {
  setError,
  setMapMode,
};
