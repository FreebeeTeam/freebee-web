import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const mapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const mapAttribution = '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';

class FreebeeMap extends Component {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
  }

  state = {
    center: {
      lat: 53.9017,
      lng: 27.5429,
    },
    zoom: 12,
    minZoom: 10,
  }

  render() {
    const {
      center,
      zoom,
      minZoom,
    } = this.state;

    const {
      classes,
    } = this.props;

    const position = [center.lat, center.lng];

    return (
      <Map
        className={classes.map}
        center={position}
        zoom={zoom}
        minZoom={minZoom}
      >
        <TileLayer
          attribution={mapAttribution}
          url={mapUrl}
        >
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
        </TileLayer>
      </Map>
    );
  }
}

export default withStyles(styles)(FreebeeMap);
