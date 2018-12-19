const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion)
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }

    let location = respuesta.data.results[0];
    let coors = location.geometry.location;

    //console.log(JSON.stringify(resp.data, undefined, 2));
    //console.log(resp.status);

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lgn: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}