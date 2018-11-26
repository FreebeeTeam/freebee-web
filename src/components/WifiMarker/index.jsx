// @flow
import * as React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { withStyles } from '@material-ui/core';
import icon from './icon';
import styles from './styles';
import type { Wifi } from '../../types/models';
import type { Classes } from '../../types/styles';

type Props = {
  classes: Classes,
  wifi: Wifi,
};

const WifiMarker = ({ wifi, classes }: Props) => {

  console.log('wifi')
  console.log(wifi)
  return (
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
};

export default withStyles(styles)(WifiMarker);
