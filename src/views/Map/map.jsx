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
import {
  ToiletMarker, WifiMarker, SocketMarker, WaterMarker, UserMarker,
} from '../../components';

import { getPositionsForPolyline } from './helpers';
import {
  MAP_MODES,
  TILE_LAYER_URL,
  MAP_ATTRIBUTION,
  MAX_ZOOM,
} from '../../config/map';

import styles, { ROUTE_COLOR } from './styles';
import 'leaflet/dist/leaflet.css';

import type { Classes } from '../../types/styles';
import type { Wifi, Toilet } from '../../types/models';
import icon from '../../components/NewMarker/icon';

type Props = {
  classes: Classes,
  wifi?: Wifi[],
  sockets?: [],
  toilets?: Toilet[],
  water?: [],
  userLocation: number[] | null,
  route: any,
  mapMode: string,
  mapViewport: { center: number[], zoom: number },
  buildRoute: (location: number[]) => void,
  setNewMarkerPosition: (position: number[]) => void,
  setMapViewport: (viewport: any) => void,
};

type State = {
  viewport: any,
};

class FreeOpportunitiesMap extends Component<Props, State> {
  static defaultProps = {
    wifi: [],
    toilets: [],
    sockets: [],
    water: [],
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

  handleViewportChanged = (viewport) => {
    const {
      setMapViewport, setNewMarkerPosition,
      mapMode,
    } = this.props;

    setMapViewport(viewport);
    if (mapMode === MAP_MODES.CREATE) {
      const marker = this.refNewMarker.current;
      if (marker) {
        setNewMarkerPosition(viewport.center);
        marker.leafletElement.setLatLng(viewport.center);
      }
    }
  };

  buildRouteToMarker = (location: number[]) => () => {
    const { buildRoute } = this.props;

    buildRoute(location);
  };

  render() {
    const {
      classes,
      wifi, toilets, sockets, water,
      userLocation, route, mapMode,
      mapViewport,
    } = this.props;

    return (
      <Map
        className={classes.map}
        viewport={mapViewport}
        onViewportChanged={this.handleViewportChanged}
        zoomControl={false}
        ref={this.setMapRef}
        maxZoom={MAX_ZOOM}
      >
        <TileLayer
          attribution={MAP_ATTRIBUTION}
          url={TILE_LAYER_URL}
        />
        {
          mapMode === MAP_MODES.CREATE && (
            <FeatureGroup>
              <Marker
                zIndexOffset={1100}
                icon={icon}
                position={mapViewport.center}
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
          {sockets.map(marker => (
            <SocketMarker key={marker.id} buildRoute={this.buildRouteToMarker} socket={marker} />
          ))}
          {water.map(marker => (
            <WaterMarker key={marker.id} buildRoute={this.buildRouteToMarker} water={marker} />
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

export default withStyles(styles)(FreeOpportunitiesMap);
