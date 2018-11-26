// @flow
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Map, TileLayer } from 'react-leaflet';
import { map as mapConfig } from '../../config';
import { ToiletMarker, WifiMarker, UserMarker } from '../../components';
import styles from './styles';
import 'leaflet/dist/leaflet.css';
import type { Classes } from '../../types/styles';
import type { Wifi, Toilet } from '../../types/models';

type Props = {
  classes: Classes,
  wifi?: Wifi[],
  userLocation: number[] | null,
  toilets?: Toilet[],
};

type State = {
  center: {
    lat: number,
    lng: number,
  },
  zoom: number,
};

class FreebeeMap extends Component<Props, State> {
  static defaultProps = {
    wifi: [],
    toilets: [],
  }

  state = {
    center: {
      lat: 53.9017,
      lng: 27.5429,
    },
    zoom: 12,
  }

  setMapRef = (element) => {
    this.map = element;
  }

  componentDidUpdate = () => {
    const { userLocation } = this.props;
    const map = this.map.leafletElement;

    if (userLocation !== null) {
      map.panTo(userLocation);
    }
  }

  render() {
    const { center, zoom } = this.state;
    const {
      classes,
      wifi,
      toilets,
      userLocation,
    } = this.props;

    const position = [center.lat, center.lng];

    return (
      <Map
        className={classes.map}
        center={position}
        zoom={zoom}
        zoomControl={false}
        ref={this.setMapRef}
      >
        <TileLayer
          attribution={mapConfig.MAP_ATTRIBUTION}
          url={mapConfig.TILE_LAYER_URL}
        />
        {userLocation && <UserMarker key={userLocation.toString()} location={userLocation} />}

        {wifi.map(marker => (
          <WifiMarker key={marker.id} wifi={marker} />
        ))}
        {toilets.map(marker => (
          <ToiletMarker key={marker.id} toilet={marker} />
        ))}
      </Map>
    );
  }
}

export default withStyles(styles)(FreebeeMap);
