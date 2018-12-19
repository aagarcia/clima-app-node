const axios = require('axios');

const getClima = async(lat, lgn) => {

    let key = 'f2f72f43d8e494958a30550bf04a0d85';
    let units = 'metric';
    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lgn }&units=${ units }&appid=${ key }`);

    if (respuesta.data.message === 'Nothing to geocode') {
        throw new Error(`No hay resultados del clima para la latitud ${ lat } y longitud ${ lgn }`);
    }

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}