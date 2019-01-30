/* @flow */
import React, { Component, createRef } from 'react';
import { withStyles } from '@material-ui/core';
import {
  Map,
  TileLayer,
  FeatureGroup,
  Polyline,
  Marker,
} from 'react-leaflet';
import { map as mapConfig } from '../../config';
import {
  ToiletMarker, WifiMarker, UserMarker,
} from '../../components';

import { getPositionsForPolyline } from './helpers';
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from './const';
import { MAP_MODES } from '../../config/map';

import styles, { ROUTE_COLOR } from './styles';
import 'leaflet/dist/leaflet.css';

import type { Classes } from '../../types/styles';
import type { Wifi, Toilet } from '../../types/models';
import icon from '../../components/NewMarker/icon';

type Props = {
  classes: Classes,
  wifi?: Wifi[],
  userLocation: number[] | null,
  toilets?: Toilet[],
  route: any,
  mapMode: string,
  buildRoute: (location: number[]) => void,
  setNewMarkerPosition: (position: number[]) => void,
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
  };

  state = {
    center: DEFAULT_MAP_CENTER,
    zoom: DEFAULT_MAP_ZOOM,
    newMarkerPosition: DEFAULT_MAP_CENTER,
  };

  refNewMarker = createRef();

  componentDidUpdate(prevProps) {
    const { userLocation } = this.props;
    const map = this.map.leafletElement;

    if (userLocation !== null
    && prevProps.userLocation !== userLocation
    ) {
      map.panTo(userLocation);
    }
  }

  setMapRef = (element) => {
    this.map = element;
  };

  updateNewMarkerPosition = () => {
    const marker = this.refNewMarker.current;
    if (marker != null) {
      this.setState({
        newMarkerPosition: marker.leafletElement.getLatLng(),
      });
      this.props.setNewMarkerPosition(marker.leafletElement.getLatLng());
    }
  };

  buildRouteToMarker = (location: number[]) => () => {
    const { buildRoute } = this.props;

    buildRoute(location);
  };

  render() {
    const { center, zoom, newMarkerPosition } = this.state;
    const {
      classes,
      wifi,
      toilets,
      userLocation,
      route,
      mapMode,
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
        {
          mapMode === MAP_MODES.CREATE && (
            <FeatureGroup>
              <Marker
                draggable
                icon={icon}
                position={newMarkerPosition}
                onDragend={this.updateNewMarkerPosition}
                ref={this.refNewMarker}
              />
            </FeatureGroup>
          )
        }
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
