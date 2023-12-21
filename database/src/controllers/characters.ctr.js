const dataService = require('../services/data.service')

const modelName = 'characters'

const listCharacters = async (req, res) => {
  const data = await dataService.listData(modelName)
  res.status(200).json(data)
}

const createCharacter = async (req, res) => {
  const body = req.body

  const create = await dataService.insertData(modelName, body)
  res.status(201).json(create)
}

const listOneCharacter = async (req, res) => {
  const { id } = req.params

  const item = await dataService.getItemById(modelName, id)
  res.status(200).json(item)
}

const deleteCharacter = async (req, res) => {
  const { id } = req.params

  const remove = await dataService.deleteItemById(modelName, id)
  res.status(200).send(remove)
}

const updateCharacter = async (req, res) => {
  const { id } = req.params
  const body = req.body

  const update = await dataService.updateItem(modelName, id, body)
  res.status(200).json(update)
}

module.exports = {
  listCharacters,
  createCharacter,
  listOneCharacter,
  deleteCharacter,
  updateCharacter
}
