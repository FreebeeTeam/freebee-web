/* @flow */
import L from 'leaflet';
import type { Icon } from 'leaflet';
import { userMarker } from '../../styles/images';
import { userMarkerIcon } from '../../styles/sizes';
import type { IconOptions } from '../../types/markers';

const options: IconOptions = {
  iconUrl: userMarker,
  iconSize: userMarkerIcon,
};

const icon: Icon = new L.Icon(options);

export default icon;
