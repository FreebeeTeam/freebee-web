// @flow
import { handleActions } from 'redux-actions';
import { markersActions } from '../../actions';

export type State = {
  +selected: string | null,
};

const {
  setFilter,
} = markersActions;

const defaultState: State = {
  selected: null,
};

const reducer = handleActions({
  [setFilter]: (state: State, { payload: { filter } }) => ({
    ...state,
    selected: filter,
  }),
}, defaultState);

export default reducer;
