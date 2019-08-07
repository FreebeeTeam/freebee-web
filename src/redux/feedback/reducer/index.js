import { combineReducers } from 'redux';
import feedback from './feedback';
import feedbackAddress from './address';

export default combineReducers({
  feedback,
  feedbackAddress,
});
