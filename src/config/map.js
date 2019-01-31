/* @flow */

export default {
  TILE_LAYER_URL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  MAP_ATTRIBUTION: '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors',
};

export const MAP_MODES = {
  READ: 'read',
  CREATE: 'create',
};

export const DEFAULT_MAP_CENTER = [53.9017, 27.5429];

export const DEFAULT_MAP_ZOOM = 12;
