/* @flow */
import * as React from 'react';
import { Marker } from 'react-leaflet';
import icon from './icon';

type Props = {
  location: [],
};

const UserMarker = ({ location }: Props) => {
  return (
    <Marker
      icon={icon}
      zIndexOffset={10000}
      position={location}
    />
  );
};

export default UserMarker;
