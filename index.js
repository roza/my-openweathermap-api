const { URL } = require('url');
require('isomorphic-fetch');


class OpenWeatherMap{
    
    constructor(APPID, units) {
        this._APPID = APPID;
        this._units = units;
  }
   
    getWeather(city){
        const urlow = new URL("http://api.openweathermap.org/data/2.5/weather"),
            params = {q:city, APPID: this._APPID, units: this._units}
        Object.keys(params).forEach(key => urlow.searchParams.append(key, params[key]))
        fetch(urlow.toString())
        .then(x => x.json())
        .then(xx => {
              console.log(xx);
        });
    }
}; 

module.exports.OpenWeatherMap = OpenWeatherMap;

