/* @flow */
import { createActions } from 'redux-actions';

type Actions = {
  user: {
    setCurrentLocation: (locationOrError: [] | {}) => void,
  },
};

const { user }: Actions = createActions({
  USER: {
    SET_CURRENT_LOCATION: (locationOrError: [] | {}) => {
      if (!locationOrError.length) {
        return {
          error: true,
          geolocationErrorCode: locationOrError.code,
          currentLocation: null,
        };
      }
      return { currentLocation: locationOrError };
    },
  },
});

export default user;
