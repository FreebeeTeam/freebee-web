/* @flow */

import { createSelector } from 'reselect';

const rootSelector = state => state.ui;

const feedbackSidebarSelector = createSelector(
  rootSelector,
  ui => ui.feedbackSidebar,
);
const isFeedbackSidebarOpenSelector = createSelector(
  feedbackSidebarSelector,
  sidebar => sidebar.open,
);

export {
  feedbackSidebarSelector,
  isFeedbackSidebarOpenSelector,
};
