let { OpenWeatherMap } = require('./index.js');
const { API_KEY } = require('./ow-api-key.js');
console.log(API_KEY);
let ow = new OpenWeatherMap(API_KEY, 'metric',
    {http_proxy:'http://wwwcache.univ-orleans.fr:3128'});

 ow.getWeather('Yakutsk').then(data => {
    console.log('Temp:', data.main.temp);
}) .catch(err => {
    console.log('Error while retrieving API data')
});


 