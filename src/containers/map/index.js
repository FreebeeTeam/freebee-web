import { connect } from 'react-redux';
import { FreebeeMap } from '../../components';
import { wifiActions } from '../../redux/actions';
import { wifisSelector } from '../../redux/selectors/markers';

const mapStateToProps = state => ({
  wifis: wifisSelector(state),
});

const { getWifiMarkers } = wifiActions;

const mapDispatchToProps = dispatch => ({
  getWifis: () => dispatch(getWifiMarkers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FreebeeMap);
