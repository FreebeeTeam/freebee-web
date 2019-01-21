/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import _ from 'lodash';
import FreebeeMapPage from './page';
import { open } from '../../redux/actions/ui/feedback-sidebar';
import { LOCATION_ACCESS_DENIED_CODE } from '../../redux/middlewares/const';
import { selectors as routingSelectors, routingActions } from '../../redux/routing';
import { userActions, selectors as userSelectors } from '../../redux/user';
import { selectors as errorsSelectors } from '../../redux/errors';
import { actions, selectors as markersSelectors } from '../../redux/markers';

type Props = {
  locationError: string,
};

type State = {
  errorSnackbarIsOpen: boolean,
};

class FreebeeMapPageContainer extends Component<Props, State> {
  componentDidUpdate(prevProps): void {
    const { lastGlobalError, enqueueSnackbar } = this.props;

    const oldErrorId = _.get(prevProps.lastGlobalError, 'errorId', null);
    const newErrorId = _.get(lastGlobalError, 'errorId', null);

    if (oldErrorId !== newErrorId && newErrorId !== null) {
      const { errorMessage } = lastGlobalError;
      enqueueSnackbar(errorMessage, { variant: 'error' });
    }
  }

  render() {
    return (
      <FreebeeMapPage {...this.props} />
    );
  }
}

const mapState = state => ({
  isMarkersFetching: markersSelectors.selectIsAllMarkersFetching(state),
  currentUserLocation: userSelectors.selectUserCurrentLocation(state),
  locationError: userSelectors.selectUserCurrentLocationError(state),
  selectedFilter: markersSelectors.selectFilter(state),
  routeSummary: routingSelectors.selectRouteSummary(state),
  lastGlobalError: errorsSelectors.selectLastError(state),
});

const { setFilter } = actions;
const { resetRoute } = routingActions;

const mapDispatch = dispatch => ({
  openFeedbackSidebar: () => dispatch(open()),
  setUserCurrentLocation: location => dispatch(userActions.setCurrentLocation(location)),
  setFilter: filter => dispatch(setFilter(filter)),
  resetRoute: () => dispatch(resetRoute()),
});

const mergeProps = (propsFromState, propsFromDispatch) => {
  const { currentUserLocation } = propsFromState;
  const setUserLocation = () => {
    if (currentUserLocation) {
      propsFromDispatch.setUserCurrentLocation(currentUserLocation.slice());
    } else {
      propsFromDispatch.setUserCurrentLocation({
        code: LOCATION_ACCESS_DENIED_CODE,
      });
    }
  };

  return {
    ...propsFromState,
    ...propsFromDispatch,
    setUserLocation,
  };
};

export default connect(mapState, mapDispatch, mergeProps)(withSnackbar(FreebeeMapPageContainer));
