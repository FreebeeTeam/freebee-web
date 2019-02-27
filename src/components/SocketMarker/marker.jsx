/* @flow */
import * as React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { withStyles, IconButton } from '@material-ui/core';
import { Directions as RouteIcon } from '@material-ui/icons';
import icon from './icon';
import styles from './styles';
import type { Classes } from '../../types/styles';

type Props = {
  classes: Classes,
  socket: any,
  buildRoute: (any) => void,
};

const SocketMarker = ({ socket, classes, buildRoute }: Props) => {
  return (
    <Marker
      icon={icon}
      position={socket.location}
      onDblclick={() => { buildRoute(socket)(); }}
    >
      <Popup autoPan={false}>
        <div className={classes.content}>
          <span className={classes.title}>Розетка</span>
          <IconButton
            disableRipple
            className={classes.routeButton}
            onClick={buildRoute(socket)}
          >
            <RouteIcon />
          </IconButton>
          <br />
          <br />
          <span className={classes.point}>Адрес: </span>
          <span>{socket.address}</span>
          <br />
          <br />
          <span className={classes.point}>Описание: </span>
          <span>{socket.description || 'Отсутствует'}</span>
        </div>
      </Popup>
    </Marker>
  );
};

export default withStyles(styles)(SocketMarker);
