// @flow
import { NETWORK_ERROR_MESSAGE, NETWORK_ERROR_MESSAGE_RU } from './const';
import { actions } from '../errors';

const middleware = store => next => (action) => {
  if (action.error) {
    const { payload } = action;
    if (payload.message && payload.message === NETWORK_ERROR_MESSAGE) {
      store.dispatch(actions.setError(NETWORK_ERROR_MESSAGE_RU));
    }
  }

  return next(action);
};

export default middleware;
