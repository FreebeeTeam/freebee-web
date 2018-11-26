/* @flow */

import { createAction } from 'redux-actions';

const prefix = 'FEEDBACK_SIDEBAR';

const open = createAction(`${prefix}/OPEN`);
const close = createAction(`${prefix}/CLOSE`);

export {
  open,
  close,
};
