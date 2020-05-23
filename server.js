const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const address = process.argv[2];

if (!address) {
  console.log("please provide a valid address");
} else {
  geocode(address, (error, { longitude, latitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forCastdata) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forCastdata);
    });
  });
}
