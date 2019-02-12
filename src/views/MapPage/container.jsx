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
};

type State = {
  errorSnackbarIsOpen: boolean,
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

  render() {
    return (
      <MapPage
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
    propsFromDispatch.setNewMarkerPosition({
      lat: mapViewport.center[0],
      lng: mapViewport.center[1]
    });
  };

  return {
    ...propsFromState,
    ...propsFromDispatch,
    setUserLocation,
    setNewMarkerPositionOnMapViewport,
  };
};

export default connect(mapState, mapDispatch, mergeProps)(withSnackbar(MapPageContainer));
