// @flow
import { connect } from 'react-redux';
import FreebeeMap from '../../pages/freebee-map';
import { open } from '../../redux/actions/ui/feedback-sidebar';
import { isAllMarkersFetching } from '../../redux/selectors/markers';

const mapPropsToState = state => ({
  isFetching: isAllMarkersFetching(state),
});

const mapDispatchToProps = dispatch => ({
  openFeedbackSidebar: () => dispatch(open()),
});

export default connect(mapPropsToState, mapDispatchToProps)(FreebeeMap);
