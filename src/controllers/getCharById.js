const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios');
const { response } = require('express');

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);
    const { status, name, species, origin, image, gender } = data;

    if (!name) throw new Error(`Faltan datos del personaje con ID: ${id}`);

    const character = {
      id,
      name,
      species,
      origin,
      image,
      gender,
      status,
    };
    return res.status(200).json(character);
  } catch (error) {
    return error.message.includes('ID') ? res.status(404).send(error.message) : res.status(500).send(error.response.data.error);
  }
};

module.exports = {
  getCharById,
};
