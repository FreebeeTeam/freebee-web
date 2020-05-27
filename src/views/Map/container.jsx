/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from './map';
import { MARKER_FILTERS } from '../../components/FilterButton';

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
  water?: [],
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
    water: [],
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
      wifi, toilets, sockets, water,
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
        water={water}
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

const filterBySearchString = (point, searchString) => {
  const value = searchString.toLowerCase().trim();
  const descriptionIncludes = point.description && point.description.toLowerCase().includes(value);
  const titleIncludes = point.title && point.title.toLowerCase().includes(value);
  const addressIncludes = point.address && point.address.toLowerCase().includes(value);

  return descriptionIncludes || titleIncludes || addressIncludes;
};

const mapState = (state) => {
  const filter = selectors.selectFilter(state);
  const { searchString } = state.markers.shared;

  let wifi = [];
  let toilets = [];
  let sockets = [];
  let water = [];

  if (filter === MARKER_FILTERS.all.value) {
    wifi = selectors.selectWifi(state);
    toilets = selectors.selectToilets(state);
    sockets = selectors.selectSockets(state);
    water = selectors.selectWater(state);
  }

  if (filter === MARKER_FILTERS.wifi.value) {
    wifi = selectors.selectWifi(state);
  }

  if (filter === MARKER_FILTERS.toilet.value) {
    toilets = selectors.selectToilets(state);
  }

  if (filter === MARKER_FILTERS.socket.value) {
    sockets = selectors.selectSockets(state);
  }

  if (filter === MARKER_FILTERS.water.value) {
    water = selectors.selectWater(state);
  }

  if (searchString) {
    wifi = wifi.filter(point => filterBySearchString(point, searchString));
    toilets = toilets.filter(point => filterBySearchString(point, searchString));
    sockets = sockets.filter(point => filterBySearchString(point, searchString));
    water = water.filter(point => filterBySearchString(point, searchString));
  }

  return {
    wifi,
    toilets,
    sockets,
    water,
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
