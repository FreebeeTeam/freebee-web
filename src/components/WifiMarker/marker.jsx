/* @flow */
import * as React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { withStyles, IconButton } from '@material-ui/core';
import { Directions as RouteIcon } from '@material-ui/icons';
import icon from './icon';
import styles from './styles';
import type { Wifi } from '../../types/models';
import type { Classes } from '../../types/styles';

type Props = {
  classes: Classes,
  wifi: Wifi,
  buildRoute: (location: number[]) => void,
};

const WifiMarker = ({ wifi, classes, buildRoute }: Props) => {
  return (
    <Marker
      icon={icon}
      position={wifi.location}
      onDblclick={() => { buildRoute(wifi)(); }}
    >
      <Popup autoPan={false}>
        <div className={classes.content}>
          <span className={classes.point}>Название: </span>
          <span className={classes.title}>
            {wifi.title}
          </span>
          <IconButton
            disableRipple
            className={classes.routeButton}
            onClick={buildRoute(wifi)}
          >
            <RouteIcon />
          </IconButton>
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
};

export default withStyles(styles)(WifiMarker);
