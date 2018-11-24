// @flow
import { connect } from 'react-redux';
import FreebeeMapPage from './page';
import { open } from '../../redux/actions/ui/feedback-sidebar';
import { isAllMarkersFetching } from '../../redux/selectors/markers';

const mapState = state => ({
  isFetching: isAllMarkersFetching(state),
});

const mapDispatch = dispatch => ({
  openFeedbackSidebar: () => dispatch(open()),
});

export default connect(mapState, mapDispatch)(FreebeeMapPage);
