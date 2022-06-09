import camelize from "camelize";
import { host } from "../../utils/env";

export const restaurantsRequest = (location) => {
  return fetch(`${host}/placesNearby?location=${location}`).then((res) => {
    return res.json();
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedResults);
};
