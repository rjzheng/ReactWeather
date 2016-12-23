import axios from 'axios';

const APP_ID = '87a74343f849d1e05a401545857ec66c';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${APP_ID}`;


module.exports = {
  getTemp: function(city) {

    var encodedLocation = encodeURIComponent(city);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(requestUrl)
      .then(function(res) {
        if(res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      }, function(res) {
        throw new Error(res.data.message);
      });
  }
}
