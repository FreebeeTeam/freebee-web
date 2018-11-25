// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FreebeeMapPage from './page';
import { open } from '../../redux/actions/ui/feedback-sidebar';
import { userActions, selectors } from '../../redux/user';
import { isAllMarkersFetching } from '../../redux/selectors/markers';

type Props = {
  locationError: string,
};

type State = {
  errorSnackbarIsOpen: boolean,
};

class FreebeeMapPageContainer extends Component<Props, State> {
  state = {
    errorSnackbarIsOpen: false,
  }

  componentWillReceiveProps = (nextProps) => {
    const { locationError } = this.props;

    if (nextProps.locationError !== null && nextProps.locationError !== locationError) {
      this.setState({ errorSnackbarIsOpen: true });
    }
  }

  openSnackbar = () => {
    this.setState({ errorSnackbarIsOpen: true });
  }

  closeSnackbar = () => {
    this.setState({ errorSnackbarIsOpen: false });
  }

  render() {
    const { errorSnackbarIsOpen } = this.state;

    return (
      <FreebeeMapPage
        closeErrorSnackbar={this.closeSnackbar}
        errorSnackbarIsOpen={errorSnackbarIsOpen}
        {...this.props}
      />
    );
  }
}

const mapState = state => ({
  isFetching: isAllMarkersFetching(state),
  currentUserLocation: selectors.selectUserCurrentLocation(state),
  locationError: selectors.selectUserCurrentLocationError(state),
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

export default connect(mapState, mapDispatch, mergeProps)(FreebeeMapPageContainer);
