/* @flow */
import L from 'leaflet';
import type { Icon } from 'leaflet';
import { toilet } from '../../themes/images';
import { markerIcon } from '../../themes/sizes';
import type { IconOptions } from '../../types/markers';

const options: IconOptions = {
  iconUrl: toilet,
  iconSize: markerIcon,
};

const icon: Icon = new L.Icon(options);

export default icon;
