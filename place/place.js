const axios = require('axios');

const getLugarLatLng = async(direction) => {
    const encodeUrl = encodeURI(direction);

    const response = await axios.get(`https://geocode.xyz/${encodeUrl}?json=1`);
    if (response.data.matches === null) {
        throw new Error(`Not found results ${direction}`);
    }
    const data = response.data.alt.loc;
    let object = {
        direction: data.city,
        lat: data.latt,
        lng: data.longt
    }
    return object;
}

module.exports = {
    getLugarLatLng
}