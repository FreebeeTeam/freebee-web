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
  water: any,
  buildRoute: any,
};

const WaterMarker = ({ water, classes, buildRoute }: Props) => {
  return (
    <Marker
      icon={icon}
      position={water.location}
      onDblclick={() => { buildRoute(water)(); }}
    >
      <Popup autoPan={false}>
        <div className={classes.content}>
          <span className={classes.title}>Вода</span>
          <IconButton
            disableRipple
            className={classes.routeButton}
            onClick={buildRoute(water)}
          >
            <RouteIcon />
          </IconButton>
          <br />
          <br />
          <span className={classes.point}>Адрес: </span>
          <span>{water.address}</span>
          <br />
          <br />
          <span className={classes.point}>Описание: </span>
          <span>{water.description || 'Отсутствует'}</span>
        </div>
      </Popup>
    </Marker>
  );
};

export default withStyles(styles)(WaterMarker);
