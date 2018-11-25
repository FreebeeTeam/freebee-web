// @flow
import { createActions } from 'redux-actions';

type Actions = {
  user: {
    setCurrentLocation: (locationOrError: [] | string) => void,
  },
};

const { user }: Actions = createActions({
  USER: {
    SET_CURRENT_LOCATION: (locationOrError: [] | string) => ({ locationOrError }),
  },
});

export default user;
