/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FreebeeMap from './map';
import { selectors, thunks } from '../../redux/markers';
import { userActions } from '../../redux/user';
import {
  thunks as routingThunks,
  selectors as routingSelectors,
} from '../../redux/routing';
import type { Wifi, Toilet } from '../../types/models';

type Props = {
  wifi?: Wifi[],
  toilets?: Toilet[],
  routeComponents: [],
  getMarkers: () => void,
  getRoute: (number[], number[]) => void,
  setCurrentLocation: (position: number[] | string) => void,
  currentUserLocation: number[] | null,
};

class MapContainer extends Component<Props> {
  static defaultProps = {
    wifi: [],
    toilets: [],
  }

  componentDidMount = () => {
    const { getMarkers, getRoute } = this.props;

    getMarkers();
    getRoute([54.2983344, 26.8481812], [54.3001637, 26.8466809]);
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
      setCurrentLocation('Location information is unavailable.');
    };

    nativeGeolocation.getCurrentPosition(successCallback, errorCallback);
  }

  render() {
    const {
      wifi,
      toilets,
      currentUserLocation,
      routeComponents,
    } = this.props;

    return (
      <FreebeeMap
        wifi={wifi}
        toilets={toilets}
        routeComponents={routeComponents}
        userLocation={currentUserLocation}
      />
    );
  }
}

const {
  selectWifi,
  selectToilets,
  selectFilter,
} = selectors;

const mapState = (state) => {
  const filter = selectFilter(state);
  let wifi = [];
  let toilets = [];

  if (filter === null) {
    wifi = selectWifi(state);
    toilets = selectToilets(state);
  }

  if (filter === 'wifi') {
    wifi = selectWifi(state);
  }

  if (filter === 'toilet') {
    toilets = selectToilets(state);
  }

  return {
    wifi,
    toilets,
    filter,
    routeComponents: routingSelectors.selectRouteComponents(state),
  };
};

const { getMarkers } = thunks;
const { getRoute } = routingThunks;
const { setCurrentLocation } = userActions;

const mapDispatch = dispatch => ({
  getMarkers: () => dispatch(getMarkers()),
  getRoute: (point0, point1) => dispatch(getRoute(point0, point1)),
  setCurrentLocation: (position: [] | string) => dispatch(setCurrentLocation(position)),
});

export default connect(mapState, mapDispatch)(MapContainer);
