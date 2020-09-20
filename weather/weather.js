const axios = require('axios');


const getWeather = async(lat, lng) => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1329048a8a9861d2c7ee64864b0ba5d1&units=metric`);
    return response.data.main.temp;
};

module.exports = {
    getWeather
}