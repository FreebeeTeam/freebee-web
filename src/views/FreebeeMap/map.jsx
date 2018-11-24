// @flow
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Map, TileLayer } from 'react-leaflet';
import { map as mapConfig } from '../../config';
import { ToiletMarker, WifiMarker } from '../../components';
import styles from './styles';
import 'leaflet/dist/leaflet.css';
import type { Classes } from '../../types/styles';
import type { Wifi, Toilet } from '../../types/models';

type Props = {
  classes: Classes,
  wifis?: Wifi[],
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
    wifis: [],
    toilets: [],
  }

  state = {
    center: {
      lat: 53.9017,
      lng: 27.5429,
    },
    zoom: 12,
  }

  render() {
    const { center, zoom } = this.state;
    const { classes, wifis, toilets } = this.props;

    const position = [center.lat, center.lng];

    return (
      <Map
        className={classes.map}
        center={position}
        zoom={zoom}
        zoomControl={false}
      >
        <TileLayer
          attribution={mapConfig.MAP_ATTRIBUTION}
          url={mapConfig.TILE_LAYER_URL}
        />
        {wifis.map(wifi => (
          <WifiMarker key={wifi._id} wifi={wifi} />
        ))}
        {toilets.map(toilet => (
          <ToiletMarker key={toilet._id} toilet={toilet} />
        ))}
      </Map>
    );
  }
}

export default withStyles(styles)(FreebeeMap);
