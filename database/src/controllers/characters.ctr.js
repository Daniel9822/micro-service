const response = require('../../helpers/response')
const dataService = require('../services/data.service')

const modelName = 'characters'

const listCharacters = async (req, res) => {
  const data = await dataService.listData(modelName)
  response(res, 200, data)
}

const createCharacter = async (req, res) => {
  const body = req.body

  const create = await dataService.insertData(modelName, body)
  response(res, 201, create)
}

const listOneCharacter = async (req, res) => {
  const { id } = req.params

  const item = await dataService.getItemById(modelName, id)
  response(res, 200, item)

}

const deleteCharacter = async (req, res) => {
  const { id } = req.params

  const remove = await dataService.deleteItemById(modelName, id)
  response(res, 200, remove)
}

const updateCharacter = async (req, res) => {
  const { id } = req.params
  const body = req.body

  const update = await dataService.updateItem(modelName, id, body)
  response(res, 200, update)
}

module.exports = {
  listCharacters,
  createCharacter,
  listOneCharacter,
  deleteCharacter,
  updateCharacter
}
