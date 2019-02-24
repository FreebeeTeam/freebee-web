/* @flow */
import L from 'leaflet';
import type { Icon } from 'leaflet';
import { newMarker } from '../../styles/images';
import { markerIcon } from '../../styles/sizes';
import type { IconOptions } from '../../types/markers';

const options: IconOptions = {
  iconUrl: newMarker,
  iconSize: markerIcon,
  className: 'NewMarkerIcon',
};

const icon: Icon = new L.Icon(options);

export default icon;
