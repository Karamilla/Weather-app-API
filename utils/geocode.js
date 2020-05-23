const request = require("request");

const geocode = (adress, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/ " +
    encodeURIComponent(adress) +
    ".json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoia2FyYW1pbGxhIiwiYSI6ImNrYWowdXppNzA2NXIycm81ZGt3Mm1jdGkifQ.5P9E_EyYNjFPmUqwxvW2PA";
  request({ url: url, json: true }, (error, res) => {
    if (error) {
      callback("Unable to connect to location service", undefined);
    } else if (res.body.features.length === 0) {
      callback("Unable to find location .  Try another search");
    } else {
      callback(undefined, {
        latitude: res.body.features[0].center[1],
        longitude: res.body.features[0].center[0],
        location: res.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
