/* @flow */
export const TILE_LAYER_URL: string = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
export const MAP_ATTRIBUTION: string = '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';

export type MapMode = {
  READ: string,
  CREATE: string,
};

export const MAP_MODES: MapMode = {
  READ: 'read',
  CREATE: 'create',
};

export const DEFAULT_MAP_CENTER: number[] = [53.9017, 27.5429];

export const DEFAULT_MAP_ZOOM: number = 12;
export const MAX_ZOOM: number = 19;
