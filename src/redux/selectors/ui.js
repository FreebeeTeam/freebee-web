import { createSelector } from 'reselect';

const uiSelector = state => state.ui;

const feedbackSidebarSelector = createSelector(
  uiSelector,
  ui => ui.feedbackSidebar,
);
const isFeedbackSidebarOpenSelector = createSelector(
  feedbackSidebarSelector,
  sidebar => sidebar.open,
);

export {
  uiSelector,
  feedbackSidebarSelector,
  isFeedbackSidebarOpenSelector,
};
