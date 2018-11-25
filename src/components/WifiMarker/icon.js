// @flow
import L from 'leaflet';
import type { Icon } from 'leaflet';
import { wifi } from '../../themes/images';
import { markerIcon } from '../../themes/sizes';
import type { IconOptions } from '../../types/markers';

const options: IconOptions = {
  iconUrl: wifi,
  iconSize: markerIcon,
};

const icon: Icon = new L.Icon(options);

export default icon;
