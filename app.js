const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').option({
    direction: {
        alias: 'd',
        description: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direction) => {
    try {
        let geoApi = await place.getLugarLatLng(direction);
        let weatherApi = await weather.getWeather(geoApi.lat, geoApi.lng);
        return `El clima de ${geoApi.direction} es de ${weatherApi}`
    } catch (error) {
        return `No se pudo determinar el clima de ${direction}`
    }
}

getInfo(argv.direction)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });