import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { map as mapConfig } from '../../config';
import WifiMarker from '../wifi-marker';
import styles from './styles';

class FreebeeMap extends Component {
  static defaultProps = {
    wifis: [],
  }

  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    getWifis: PropTypes.func.isRequired,
    wifis: PropTypes.arrayOf(PropTypes.shape({
    })),
  }

  state = {
    center: {
      lat: 53.9017,
      lng: 27.5429,
    },
    zoom: 12,
  }

  componentDidMount = () => {
    const { getWifis } = this.props;

    getWifis();
  }

  render() {
    const { center, zoom } = this.state;
    const { classes, wifis } = this.props;

    const position = [center.lat, center.lng];

    return (
      <Map
        className={classes.map}
        center={position}
        zoom={zoom}
      >
        <TileLayer
          attribution={mapConfig.MAP_ATTRIBUTION}
          url={mapConfig.TILE_LAYER_URL}
        />
        {wifis.map(wifi => (
          <WifiMarker wifi={wifi} />
        ))}
      </Map>
    );
  }
}

export default withStyles(styles)(FreebeeMap);
