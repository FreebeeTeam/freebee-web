// @flow
import * as React from 'react';
import { withStyles } from '@material-ui/core';
import { Map, TileLayer } from 'react-leaflet';
import { map as mapConfig } from '../../config';
import WifiMarker from '../wifi-marker';
import ToiletMarker from '../toilet-marker';
import styles from './styles';

import type { Classes } from '../../types/styles';
import 'leaflet/dist/leaflet.css';
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

class FreebeeMap extends React.PureComponent<Props, State> {
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
          <WifiMarker wifi={wifi} />
        ))}
        {toilets.map(toilet => (
          <ToiletMarker toilet={toilet} />
        ))}
      </Map>
    );
  }
}

export default withStyles(styles)(FreebeeMap);
