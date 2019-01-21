/* @flow */
import { createActions } from 'redux-actions';
import shortId from 'shortid';


const { setError } = createActions({
  SET_ERROR: (errorMessage) => ({ errorId: shortId.generate(), errorMessage }),
});

export {
  setError,
};

