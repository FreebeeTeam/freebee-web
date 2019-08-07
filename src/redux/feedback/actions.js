/* @flow */
import { createActions } from 'redux-actions';

const {
  feedback: {
    createFeedbackRequest,
    createFeedbackSuccess,
    createFeedbackError,

    getAddressRequest,
    getAddressSuccess,
    getAddressError,

    resetAddress,
  },
} = createActions({
  FEEDBACK: {
    CREATE_FEEDBACK_REQUEST: (): void => {},
    CREATE_FEEDBACK_SUCCESS: (): void => {},
    CREATE_FEEDBACK_ERROR: (error: any): { error: any } => ({ error }),

    GET_ADDRESS_REQUEST: (): void => {},
    GET_ADDRESS_SUCCESS: address => ({ address }),
    GET_ADDRESS_ERROR: (error: any) => ({ error }),

    RESET_ADDRESS: () => {},
  },
});

export {
  createFeedbackRequest,
  createFeedbackSuccess,
  createFeedbackError,

  getAddressRequest,
  getAddressSuccess,
  getAddressError,

  resetAddress,
};
