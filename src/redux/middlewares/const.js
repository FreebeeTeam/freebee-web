export const NETWORK_ERROR_MESSAGE = 'Network Error';
export const NETWORK_ERROR_MESSAGE_RU = 'Ошибка подключения к интернету.';

export const LOCATION_ACCESS_DENIED_CODE = 1;
export const LOCATION_ACCESS_DENIED_MESSAGE_RU = 'Для работы приложения необходимо включить геолокацию.';

export const LOCATION_UNAVAILABLE_CODE = 2;
export const LOCATION_UNAVAILABLE_MESSAGE_RU = 'Ошибка при определении месторасположения.';

export const LOCATION_TIMEOUT_CODE = 3;
export const LOCATION_TIMEOUT_MESSAGE_RU = 'Время ожидания вышло.';

export const GEOLOCATION_ERRORS = {
  [LOCATION_ACCESS_DENIED_CODE]: LOCATION_ACCESS_DENIED_MESSAGE_RU,
  [LOCATION_UNAVAILABLE_CODE]: LOCATION_UNAVAILABLE_MESSAGE_RU,
  [LOCATION_TIMEOUT_CODE]: LOCATION_TIMEOUT_MESSAGE_RU,
};
