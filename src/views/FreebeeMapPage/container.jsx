// @flow
import { connect } from 'react-redux';
import FreebeeMapPage from './page';
import { open } from '../../redux/actions/ui/feedback-sidebar';
import { userActions, selectors } from '../../redux/user';
import { isAllMarkersFetching } from '../../redux/selectors/markers';

const mapState = state => ({
  isFetching: isAllMarkersFetching(state),
  currentUserLocation: selectors.selectUserCurrentLocation(state),
});

const mapDispatch = dispatch => ({
  openFeedbackSidebar: () => dispatch(open()),
  setUserCurrentLocation: location => dispatch(userActions.setCurrentLocation(location)),
});

const mergeProps = (propsFromState, propsFromDispatch) => {
  const { currentUserLocation, ...rest } = propsFromState;
  const setUserLocation = () => {
    if (currentUserLocation) {
      propsFromDispatch.setUserCurrentLocation(currentUserLocation.slice());
    }
  };

  return {
    ...propsFromState,
    ...rest,
    setUserLocation,
  };
};

export default connect(mapState, mapDispatch, mergeProps)(FreebeeMapPage);
