const { mocks, addMockImage } = require("./mock");
const functions = require("firebase-functions");

const addGoogleImage = (restaurant) => {
  const ref = restaurant.photos[0].photo_reference;

  if (!ref) {
    restaurant.photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ];
    return restaurant;
  }

  restaurant.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${process.env.GOOGLE_KEY}`,
  ];
  return restaurant;
};

module.exports.placesRequest = (request, response, client) => {
  const { location, mock } = request.query;

  if (mock === "true") {
    const data = mocks[location];
    if (data) {
      data.results = data.results.map(addMockImage);
    }
    return response.json(data);
  } else {
    client
      .placesNearby({
        params: {
          location: location,
          radius: 1500,
          type: "restaurant",
          key: functions.config().google.key,
        },
        timeout: 1000,
      })
      .then((result) => {
        result.data.results = result.data.results.map(addGoogleImage);
        return response.json(result.data);
      })
      .catch((e) => {
        response.status(400);
        return response.send(e);
      });
  }
};
