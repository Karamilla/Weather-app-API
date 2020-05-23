const request = require("request");
const geocode = require("./utils/geocode");

// const url =
//   "http://api.weatherstack.com/current?access_key=983523b3fa72d7b27081eed6d9f061f1&query=New%20York&units=f";

// request({ url: url, json: true }, (error, res) => {
//   if (error) {
//     console.log("Unable to connect to Weather service");
//   } else if (res.body.error) {
//     console.log("unable to find location");
//   } else {
//     console.log(
//       res.body.current.weather_descriptions[0] +
//         " it's currently " +
//         res.body.current.feelslike +
//         " degrees"
//     );
//   }
// });

const weather = (location, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=983523b3fa72d7b27081eed6d9f061f1&query=" +
    decodeURIComponent(location) +
    " &units=f";
  request({ url: url, json: true }, (error, res) => {
    if (error) {
      callback("Unable to connect to Weather service");
    } else if (res.body.error) {
      callback("unable to find location");
    } else {
      callback(undefined, {
        desc: res.body.current.weather_descriptions[0],
        feelslike: res.body.current.feelslike,
      });
    }
  });
};

weather("cairo", (error, data) => {
  console.log("data", data);
});
// const geocodeUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoia2FyYW1pbGxhIiwiYSI6ImNrYWowdXppNzA2NXIycm81ZGt3Mm1jdGkifQ.5P9E_EyYNjFPmUqwxvW2PA";

// request({ url: geocodeUrl, json: true }, (error, res) => {
//   if (error) {
//     console.log("Unable to connect to Location service");
//   } else if (res.body.features.length === 0) {
//     console.log("Unable to find location .  Try another search");
//   } else {
//
//     console.log(latitude, longitude);
//   }
// });

geocode("mansoura", (error, data) => {
  console.log("Error", error);
  console.log("data", data);
});
