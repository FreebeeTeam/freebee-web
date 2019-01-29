/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import _ from 'lodash';
import { MAP_MODES } from "../../config/map";
import FreebeeMapPage from './page';
import { open } from '../../redux/actions/ui/feedback-sidebar';

import { LOCATION_ACCESS_DENIED_CODE } from '../../redux/middlewares/const';
import { selectors as routingSelectors, routingActions } from '../../redux/routing';
import { userActions, selectors as userSelectors } from '../../redux/user';
import { sharedActions, selectors as sharedSelectors } from '../../redux/shared';
import { actions as markerActions, selectors as markersSelectors } from '../../redux/markers';

type Props = {
  locationError: string,
  setMapMode: (mode: string) => void,
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

  setCreationMapMode = () => {
    this.props.setMapMode(MAP_MODES.CREATE);
  };

  render() {
    return (
      <FreebeeMapPage
        {...this.props}
        setCreationMapMode={this.setCreationMapMode}
      />
    );
  }
}

const mapState = state => ({
  isMarkersFetching: markersSelectors.selectIsAllMarkersFetching(state),
  currentUserLocation: userSelectors.selectUserCurrentLocation(state),
  locationError: userSelectors.selectUserCurrentLocationError(state),
  selectedFilter: markersSelectors.selectFilter(state),
  routeSummary: routingSelectors.selectRouteSummary(state),
  lastGlobalError: sharedSelectors.selectLastError(state),
  mapMode: sharedSelectors.selectMapMode(state),
});

const mapDispatch = dispatch => ({
  openFeedbackSidebar: () => dispatch(open()),
  setUserCurrentLocation: location => dispatch(userActions.setCurrentLocation(location)),
  setFilter: filter => dispatch(markerActions.setFilter(filter)),
  resetRoute: () => dispatch(routingActions.resetRoute()),
  setMapMode: mode => dispatch(sharedActions.setMapMode(mode)),
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
