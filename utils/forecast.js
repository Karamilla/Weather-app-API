const request = require("request");

const forecast = (long, lat, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=983523b3fa72d7b27081eed6d9f061f1&query=" +
    long +
    "," +
    lat +
    " &units=f";
  request({ url: url, json: true }, (error, res) => {
    if (error) {
      callback("Unable to connect to Weather service");
    } else if (res.body.error) {
      callback("unable to find location");
    } else {
      callback(
        undefined,
        ` ${res.body.current.weather_descriptions} througout the day . it's feels like ${res.body.current.feelslike} degrees `
      );
    }
  });
};

module.exports = forecast;
