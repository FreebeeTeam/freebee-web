/* @flow */
import L from 'leaflet';
import type { Icon } from 'leaflet';
import { userMarker } from '../../themes/images';
import { userMarkerIcon } from '../../themes/sizes';
import type { IconOptions } from '../../types/markers';

const options: IconOptions = {
  iconUrl: userMarker,
  iconSize: userMarkerIcon,
};

const icon: Icon = new L.Icon(options);

export default icon;
