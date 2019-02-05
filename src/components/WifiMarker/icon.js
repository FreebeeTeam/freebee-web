/* @flow */
import L from 'leaflet';
import type { Icon } from 'leaflet';
import { wifi } from '../../styles/images';
import { markerIcon } from '../../styles/sizes';
import type { IconOptions } from '../../types/markers';

const options: IconOptions = {
  iconUrl: wifi,
  iconSize: markerIcon,
};

const icon: Icon = new L.Icon(options);

export default icon;
