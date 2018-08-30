import React from 'react';
import PropTypes from 'prop-types';
import { Marker, Popup } from 'react-leaflet';
import { withStyles } from '@material-ui/core';
import icon from './icon';
import styles from './styles';

const WifiMarker = ({ wifi, classes }) => (
  <Marker
    icon={icon}
    position={wifi.location}
  >
    <Popup>
      <div className={classes.content}>
        <span className={classes.point}>Название: </span>
        <span className={classes.title}>
          {wifi.title}
        </span>
        <br />
        <br />
        <span className={classes.point}>Адрес: </span>
        <span>
          {wifi.address}
        </span>
        <br />
        <br />
        <span className={classes.point}>Описание: </span>
        <span>
          {wifi.description}
        </span>
      </div>
    </Popup>
  </Marker>
);

WifiMarker.propTypes = {
  wifi: PropTypes.shape({
    location: PropTypes.arrayOf(PropTypes.number).isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(WifiMarker);
