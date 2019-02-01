/* @flow */
import * as React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { withStyles, IconButton } from '@material-ui/core';
import { Directions as RouteIcon } from '@material-ui/icons';
import icon from './icon';
import styles from './styles';
import type { Toilet } from '../../types/models';
import type { Classes } from '../../types/styles';

type Props = {
  classes: Classes,
  toilet: Toilet,
  buildRoute: (any) => void,
};

const ToiletMarker = ({ toilet, classes, buildRoute }: Props) => {
  return (
    <Marker
      icon={icon}
      position={toilet.location}
      onDblclick={() => { buildRoute(toilet)(); }}
    >
      <Popup autoPan={false}>
        <div className={classes.content}>
          <span className={classes.title}>Туалет</span>
          <IconButton
            disableRipple
            className={classes.routeButton}
            onClick={buildRoute(toilet)}
          >
            <RouteIcon />
          </IconButton>
          <br />
          <br />
          <span className={classes.point}>Адрес: </span>
          <span>{toilet.address}</span>
          <br />
          <br />
          <span className={classes.point}>Описание: </span>
          <span>{toilet.description || 'Отсутствует'}</span>
        </div>
      </Popup>
    </Marker>
  );
};

export default withStyles(styles)(ToiletMarker);
