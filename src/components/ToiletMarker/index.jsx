/* @flow */
import * as React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { withStyles } from '@material-ui/core';
import icon from './icon';
import styles from './styles';
import type { Toilet } from '../../types/models';
import type { Classes } from '../../types/styles';

type Props = {
  classes: Classes,
  toilet: Toilet,
};

const WifiMarker = ({ toilet, classes }: Props) => {
  return (
  <Marker
    icon={icon}
    position={toilet.location}
  >
    <Popup>
      <div className={classes.content}>
        <span className={classes.title}>Туалет</span>
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
)};

export default withStyles(styles)(WifiMarker);
