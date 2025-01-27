const axios = require('axios');

async function getCoordinates(address) {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${process.env.GOOGLE_MAPS_API_KEY}`
    );

    if (response.data.results.length > 0) {
      const { lat, lng } = response.data.results[0].geometry.location;
      return { lat, lng };
    }
    throw new Error('Endereço não encontrado');
  } catch (error) {
    throw new Error('Erro ao converter endereço em coordenadas');
  }
}

module.exports = { getCoordinates }; 