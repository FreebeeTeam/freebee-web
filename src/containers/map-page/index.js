import { connect } from 'react-redux';
import FreebeeMap from '../../pages/freebee-map';
import { open } from '../../redux/actions/ui/feedback-sidebar';

const mapDispatchToProps = dispatch => ({
  openFeedbackSidebar: () => dispatch(open()),
});

export default connect(null, mapDispatchToProps)(FreebeeMap);
