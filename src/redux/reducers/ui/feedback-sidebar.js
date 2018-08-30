// @flow
import { handleActions } from 'redux-actions';
import { feedbackSidebarActions } from '../../actions/ui';

type State = {
  +open: boolean,
};

const { open, close } = feedbackSidebarActions;

const defaultState: State = {
  open: false,
};

const reducer = handleActions(
  {
    [open]: (state: State) => ({
      ...state,
      open: true,
    }),
    [close]: (state: State) => ({
      ...state,
      open: false,
    }),
  },
  defaultState,
);

export default reducer;
