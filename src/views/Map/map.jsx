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
  ToiletMarker, WifiMarker, UserMarker,
} from '../../components';

import { getPositionsForPolyline } from './helpers';
import {
  MAP_MODES,
  TILE_LAYER_URL,
  MAP_ATTRIBUTION,
} from '../../config/map';

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
  viewport: any,
};

class FreeOpportunitiesMap extends Component<Props, State> {
  static defaultProps = {
    wifi: [],
    toilets: [],
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
      this.props.setNewMarkerPosition(marker.leafletElement.getLatLng());
    }
  };

  handleViewportChanged = (viewport) => {
    this.props.setMapViewport(viewport);
  };

  buildRouteToMarker = (location: number[]) => () => {
    const { buildRoute } = this.props;

    buildRoute(location);
  };

  render() {
    const {
      classes,
      wifi, toilets,
      userLocation, route, mapMode,
      newMarkerPosition, mapViewport,
    } = this.props;

    return (
      <Map
        className={classes.map}
        viewport={mapViewport}
        onViewportChanged={this.handleViewportChanged}
        zoomControl={false}
        ref={this.setMapRef}
      >
        <TileLayer
          attribution={MAP_ATTRIBUTION}
          url={TILE_LAYER_URL}
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

export default withStyles(styles)(FreeOpportunitiesMap);
