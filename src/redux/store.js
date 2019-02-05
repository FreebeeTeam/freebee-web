/* @flow */

import {
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { globalErrorHandler } from './middlewares';

import rootReducer from './rootReducer';

export default () => {
  const middleware = applyMiddleware(
    thunk,
    globalErrorHandler,
  );

  const composeEnhancers = composeWithDevTools({});
  const enhancer = composeEnhancers(
    middleware,
  );

  return createStore(rootReducer, enhancer);
};
