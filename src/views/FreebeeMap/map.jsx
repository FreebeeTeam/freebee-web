/* @flow */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import {
  Map,
  TileLayer,
  FeatureGroup,
  Polyline,
} from 'react-leaflet';
import { map as mapConfig } from '../../config';
import { ToiletMarker, WifiMarker, UserMarker } from '../../components';

import { getPositionsForPolyline } from './helpers';

import styles, { ROUTE_COLOR } from './styles';
import 'leaflet/dist/leaflet.css';

import type { Classes } from '../../types/styles';
import type { Wifi, Toilet } from '../../types/models';

type Props = {
  classes: Classes,
  wifi?: Wifi[],
  userLocation: number[] | null,
  toilets?: Toilet[],
  route: any,
  buildRoute: (location: number[]) => void,
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

  buildRouteToMarker = (location: number[]) => (e) => {
    const { buildRoute } = this.props;

    buildRoute(location);
  }

  render() {
    const { center, zoom } = this.state;
    const {
      classes,
      wifi,
      toilets,
      userLocation,
      route,
    } = this.props;

    return (
      <Map
        className={classes.map}
        center={[center.lat, center.lng]}
        zoom={zoom}
        zoomControl={false}
        ref={this.setMapRef}
      >
        <TileLayer
          attribution={mapConfig.MAP_ATTRIBUTION}
          url={mapConfig.TILE_LAYER_URL}
        />
        <FeatureGroup>
          {userLocation && <UserMarker key={userLocation.toString()} location={userLocation} />}
        </FeatureGroup>
        <FeatureGroup>
          {wifi.map(marker => (
            <WifiMarker key={marker.id} buildRoute={this.buildRouteToMarker} wifi={marker} />
          ))}
          {toilets.map(marker => (
            <ToiletMarker key={marker.id} buildRoute={this.buildRouteToMarker} toilet={marker} />
          ))}
        </FeatureGroup>
        <FeatureGroup>
          <Polyline
            color={ROUTE_COLOR}
            positions={getPositionsForPolyline(route)}
          />
        </FeatureGroup>
      </Map>
    );
  }
}

export default withStyles(styles)(FreebeeMap);
