import { handleActions } from 'redux-actions';
import { feedbackSidebarActions } from '../../actions/ui';

const { open, close } = feedbackSidebarActions;

const defaultState = {
  open: false,
};

const reducer = handleActions(
  {
    [open]: state => ({
      ...state,
      open: true,
    }),
    [close]: state => ({
      ...state,
      open: false,
    }),
  },
  defaultState,
);

export default reducer;
