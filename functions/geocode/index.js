const { locations: locationsMock } = require("./geocode.mock");
const functions = require("firebase-functions");

module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = request.query;

  if (mock === "true") {
    const locationMock = locationsMock[city.toLowerCase()];
    response.json(locationMock);
  } else {
    client
      .geocode({
        params: {
          address: city,
          key: functions.config().goole.key,
        },
        timeout: 1000,
      })
      .then((result) => {
        return response.json(result.data);
      })
      .catch((e) => {
        response.status(400);
        return response.send(e);
      });
  }
};
