const liveHost =
  "https://us-central1-restaurantfinder-29e99.cloudfunctions.net";
const localHost = "http://localhost:5001/restaurantfinder-29e99/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = isDevelopment ? localHost : liveHost;
