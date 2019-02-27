/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from './map';

import { actions as markerActions, selectors, thunks } from '../../redux/markers';
import { sharedActions } from '../../redux/shared';
import { userActions } from '../../redux/user';
import {
  thunks as routingThunks,
  selectors as routingSelectors,
} from '../../redux/routing';

import type { Wifi, Toilet } from '../../types/models';

type Props = {
  wifi?: Wifi[],
  toilets?: Toilet[],
  sockets?: [],
  mapMode: string,
  route: any,
  getMarkers: () => void,
  getRoute: (number[], any) => void,
  setCurrentLocation: (position: number[] | string) => void,
  setNewMarkerPosition: (position: number[] | string) => void,
  currentUserLocation: number[] | null,
};

class MapContainer extends Component<Props> {
  static defaultProps = {
    wifi: [],
    toilets: [],
    sockets: [],
  };

  componentDidMount() {
    const { getMarkers } = this.props;

    getMarkers();
    this.getUserLocation();
  }

  getUserLocation = () => {
    const { setCurrentLocation } = this.props;
    const nativeGeolocation = navigator.geolocation;
    const successCallback = (position) => {
      const { latitude, longitude } = position.coords;

      setCurrentLocation([latitude, longitude]);
    };
    const errorCallback = (error) => {
      console.error(error);
      setCurrentLocation(error);
    };

    nativeGeolocation.getCurrentPosition(successCallback, errorCallback);
  };

  buildRoute = (marker) => {
    const { getRoute, currentUserLocation } = this.props;

    if (currentUserLocation !== null) {
      getRoute(currentUserLocation, marker);
    }
  };

  render() {
    const {
      wifi, toilets, sockets,
      currentUserLocation, route,
      mapMode,
      setNewMarkerPosition,
      mapViewport, setMapViewport,
    } = this.props;

    return (
      <Map
        wifi={wifi}
        toilets={toilets}
        sockets={sockets}
        route={route}
        userLocation={currentUserLocation}
        mapMode={mapMode}
        buildRoute={this.buildRoute}
        setNewMarkerPosition={setNewMarkerPosition}
        setMapViewport={setMapViewport}
        mapViewport={mapViewport}
      />
    );
  }
}

const mapState = (state) => {
  const filter = selectors.selectFilter(state);
  let wifi = [];
  let toilets = [];
  let sockets = [];

  if (filter === null) {
    wifi = selectors.selectWifi(state);
    toilets = selectors.selectToilets(state);
    sockets = selectors.selectSockets(state);
  }

  if (filter === 'wifi') {
    wifi = selectors.selectWifi(state);
  }

  if (filter === 'toilet') {
    toilets = selectors.selectToilets(state);
  }

  if (filter === 'socket') {
    sockets = selectors.selectSockets(state);
  }

  return {
    wifi,
    toilets,
    sockets,
    filter,
    route: routingSelectors.selectRoute(state),
    mapViewport: state.shared.mapViewport,
    newMarkerPosition: state.markers.shared.newMarkerPosition,
  };
};

const { getMarkers } = thunks;
const { getRoute } = routingThunks;
const { setCurrentLocation } = userActions;

const mapDispatch = dispatch => ({
  getMarkers: () => dispatch(getMarkers()),
  getRoute: (point0, point1) => dispatch(getRoute(point0, point1)),
  setCurrentLocation: (position: [] | string) => dispatch(setCurrentLocation(position)),
  setNewMarkerPosition: position => dispatch(markerActions.setNewMarkerPosition(position)),
  setMapViewport: viewport => dispatch(sharedActions.setMapViewport(viewport)),
});

export default connect(mapState, mapDispatch)(MapContainer);
