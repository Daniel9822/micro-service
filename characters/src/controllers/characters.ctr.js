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

  const data = await DBServices.updateCharacter(id, body)
  response(res, 200, data)
}

const createCharacter = async (req, res) => {
  const body = req.body

  const data = await DBServices.createCharacter(body)
  response(res, 201, data)
}

const deleteCharacter = async (req, res) => {
  const { id } = req.params

  const data = await DBServices.deleteCharacter(id)
  response(res, 200, data)
}

module.exports = {
  getAllCharacters,
  getCharacter,
  updateCharacter,
  createCharacter,
  deleteCharacter
}
