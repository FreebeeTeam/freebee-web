/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import _ from 'lodash';
import { MAP_MODES } from '../../config/map';
import MapPage from './page';

import { open } from '../../redux/actions/ui/feedback-sidebar';
import { LOCATION_ACCESS_DENIED_CODE } from '../../redux/middlewares/const';
import { selectors as routingSelectors, routingActions } from '../../redux/routing';
import { thunks as feedbackThunks } from '../../redux/feedback';
import { userActions, selectors as userSelectors } from '../../redux/user';
import { sharedActions, selectors as sharedSelectors } from '../../redux/shared';
import {
  actions as markerActions,
  selectors as markersSelectors,
  thunks as markersThunks,
} from '../../redux/markers';

type Props = {
  locationError: string,
  setMapMode: (mode: string) => void,
  getMarkerTypes: (mode: string) => void,
  enqueueSnackbar: (message: string) => void,
  setNewMarkerPositionOnMapViewport: () => void,
  lastGlobalError: any,
  openFeedbackSidebar: () => void,
  getAddressFromCoordinates: (coordinates: number[]) => void,
  mapViewport: {
    center: number[],
  },
};

type State = {
};

class MapPageContainer extends Component<Props, State> {
  componentDidMount() {
    const { getMarkerTypes } = this.props;

    getMarkerTypes();
  }

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
    const { setMapMode, setNewMarkerPositionOnMapViewport } = this.props;

    setNewMarkerPositionOnMapViewport();
    setMapMode(MAP_MODES.CREATE);
  };

  submitFeedbackLocation = () => {
    const { openFeedbackSidebar, getAddressFromCoordinates, mapViewport } = this.props;

    getAddressFromCoordinates(mapViewport.center);
    openFeedbackSidebar();
  };

  render() {
    return (
      <MapPage
        {...this.props}
        setCreationMapMode={this.setCreationMapMode}
        submitFeedbackLocation={this.submitFeedbackLocation}
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
  mapViewport: state.shared.mapViewport,
  mapMode: sharedSelectors.selectMapMode(state),
});

const mapDispatch = dispatch => ({
  openFeedbackSidebar: () => dispatch(open()),
  setUserCurrentLocation: location => dispatch(userActions.setCurrentLocation(location)),
  setFilter: filter => dispatch(markerActions.setFilter(filter)),
  setNewMarkerPosition: position => dispatch(markerActions.setNewMarkerPosition(position)),
  getMarkerTypes: () => dispatch(markersThunks.getMarkerTypes()),
  resetRoute: () => dispatch(routingActions.resetRoute()),
  setMapMode: mode => dispatch(sharedActions.setMapMode(mode)),
  getAddressFromCoordinates: (coordinates: number[]) => dispatch(
    feedbackThunks.getAddressFromCoordinates(coordinates),
  ),
});

const mergeProps = (propsFromState, propsFromDispatch) => {
  const { currentUserLocation, mapViewport } = propsFromState;
  const setUserLocation = () => {
    if (currentUserLocation) {
      propsFromDispatch.setUserCurrentLocation(currentUserLocation.slice());
    } else {
      propsFromDispatch.setUserCurrentLocation({
        code: LOCATION_ACCESS_DENIED_CODE,
      });
    }
  };

  const setNewMarkerPositionOnMapViewport = () => {
    propsFromDispatch.setNewMarkerPosition(mapViewport.center);
  };

  return {
    ...propsFromState,
    ...propsFromDispatch,
    setUserLocation,
    setNewMarkerPositionOnMapViewport,
  };
};

export default connect(mapState, mapDispatch, mergeProps)(withSnackbar(MapPageContainer));
