/* @flow */
export const getTimeFromSummary = (summary) => {
  const { travelTime } = summary;

  const minutes = travelTime / 60;
  if (minutes <= 60) {
    return `${Math.ceil(minutes)} минут`;
  }

  const hours = minutes / 60;

  return `${Math.ceil(hours)} часов`;
};

export const getDistanceFromSummary = (summary) => {
  const { distance } = summary;

  if (distance < 1000) {
    return `${distance} м`;
  }

  return `${Math.ceil(distance / 1000)} км`;
};
