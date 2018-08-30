import L from 'leaflet';
import { wifi } from '../../themes/images';
import { markerIcon } from '../../themes/sizes';

const wifiIcon = new L.Icon({
  iconUrl: wifi,
  iconSize: markerIcon,
});

export default wifiIcon;
