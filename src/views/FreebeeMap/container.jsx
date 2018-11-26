/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FreebeeMap from './map';
import { selectors, thunks } from '../../redux/markers';
import { userActions } from '../../redux/user';
import type { Wifi, Toilet } from '../../types/models';

type Props = {
  wifi?: Wifi[],
  toilets?: Toilet[],
  getMarkers: () => void,
  setCurrentLocation: (position: number[] | string) => void,
  currentUserLocation: number[] | null,
};

class MapContainer extends Component<Props> {
  static defaultProps = {
    wifi: [],
    toilets: [],
  }

  componentDidMount = () => {
    const { getMarkers } = this.props;

    getMarkers()
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
      wifi, toilets, currentUserLocation,
    } = this.props;

    return (
      <FreebeeMap
        wifi={wifi}
        toilets={toilets}
        userLocation={currentUserLocation}
      />
    );
  }
}

const {
  wifisSelector,
  toiletsSelector,
  filterSelector,
} = selectors;

const mapState = (state) => {
  const filter = filterSelector(state);
  let wifi = [];
  let toilets = [];

  if (filter === null) {
    wifi = wifisSelector(state);
    toilets = toiletsSelector(state);
  }

  if (filter === 'wifi') {
    wifi = wifisSelector(state);
  }

  if (filter === 'toilet') {
    toilets = toiletsSelector(state);
  }

  return {
    wifi,
    toilets,
    filter,
  };
};

const { getMarkers } = thunks;
const { setCurrentLocation } = userActions;

const mapDispatch = dispatch => ({
  getMarkers: () => dispatch(getMarkers()),
  setCurrentLocation: (position: [] | string) => dispatch(setCurrentLocation(position)),
});

export default connect(mapState, mapDispatch)(MapContainer);
