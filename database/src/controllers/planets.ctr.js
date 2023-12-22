const response = require('../../helpers/response')
const dataService = require('../services/data.service')

const modelName = 'planets'

const listPlanets = async (req, res) => {
  const data = await dataService.listData(modelName)
  response(res, 200, data)
}

const listPlanet = async (req, res) => {
  const { id } = req.params

  const data = await dataService.getItemById(modelName, id)
  response(res, 200, data)
}

const createPlanet = async (req, res) => {
  const body = req.body

  const data = await dataService.insertData(modelName, body)
  response(res, 201, data)
}

const updatePlanet = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const data = await dataService.updateItem(modelName, id, body)
  response(res, 200, data)
}

const deletePlanet = async (req, res) => {
  const { id } = req.params

  const data = await dataService.deleteItemById(modelName, id)
  response(res, 200, data)
}

module.exports = {
  listPlanet,
  listPlanets,
  createPlanet,
  updatePlanet,
  deletePlanet
}
