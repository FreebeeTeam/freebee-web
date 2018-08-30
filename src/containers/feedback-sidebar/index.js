// @flow
import { connect } from 'react-redux';
import { FeedbackSidebar } from '../../components';
import { open, close } from '../../redux/actions/ui/feedback-sidebar';
import { isFeedbackSidebarOpenSelector } from '../../redux/selectors/ui';

const mapStateToProps = state => ({
  isOpen: isFeedbackSidebarOpenSelector(state),
});

const mapDispatchToProps = dispatch => ({
  open: () => dispatch(open()),
  close: () => dispatch(close()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackSidebar);
