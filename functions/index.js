const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");

const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.geocode = functions.https.onRequest((req, res) => {
  geocodeRequest(req, res, client);
});

exports.placesNearby = functions.https.onRequest((req, res) => {
  placesRequest(req, res, client);
});
