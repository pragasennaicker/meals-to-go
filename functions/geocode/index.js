const { locations: locationsMock } = require("./geocode.mock");

module.exports.geocodeRequest = (req, res) => {
  const { city } = req.query;
  const locationMock = locationsMock[city.toLowerCase()];

  res.json(locationMock);
};
