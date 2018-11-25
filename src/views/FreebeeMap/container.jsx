// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FreebeeMap from './map';
import { wifiActions, toiletsActions } from '../../redux/actions';
import { wifisSelector, toiletsSelector, filterSelector } from '../../redux/selectors/markers';
import { userActions, selectors as userSelectors } from '../../redux/user';
import type { Wifi, Toilet } from '../../types/models';

type Props = {
  wifi?: Wifi[],
  toilets?: Toilet[],
  getWifi: () => void,
  setCurrentLocation: (position: number[] | string) => void,
  getToilets: () => void,
  currentUserLocation: number[] | null,
  locationError: string | null,
};

class MapContainer extends Component<Props> {
  static defaultProps = {
    wifi: [],
    toilets: [],
  }

  componentDidMount = () => {
    const { getWifi, getToilets } = this.props;

    getWifi();
    getToilets();
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

const { getWifiMarkers } = wifiActions;
const { getToiletMarkers } = toiletsActions;
const { setCurrentLocation } = userActions;

const mapDispatch = dispatch => ({
  getWifi: () => dispatch(getWifiMarkers()),
  getToilets: () => dispatch(getToiletMarkers()),
  setCurrentLocation: (position: [] | string) => dispatch(setCurrentLocation(position)),
});

export default connect(mapState, mapDispatch)(MapContainer);
