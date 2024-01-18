const DBServices = require('../services/dbServices')
const response = require('../utils/response')

const getAllCharacters = async (req, res) => {
  const data = await DBServices.allCharacter()
  response(res, 200, data)
}

const getCharacter = async (req, res) => {
  const { id } = req.params

  const data = await DBServices.getCharacterById(id)
  response(res, 200, data)
}

const updateCharacter = async (req, res) => {
  const { id } = req.params
  const body = req.body

  console.log(body);
  const data = await DBServices.updateCharacter(id, body)
  response(res, 200, data)
}

module.exports = {
  getAllCharacters,
  getCharacter,
  updateCharacter
}
