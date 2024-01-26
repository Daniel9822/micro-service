const response = require('../utils/response')
const DbService = require('../service/handleServices')

const listAllPlanets = async (req, res) => {
  const data = await DbService.listPlanets()
  response(res, 200, data)
}

const listOnePlanet = async (req, res) => {
  const { id } = req.params

  const data = await DbService.listPlanet(id)
  response(res, 200, data)
}

const updatePlanet = async (req, res) => {
  const { id } = req.params
  const body = req.body

  const data = await DbService.updatePlanet(id, body)
  response(res, 200, data)
}

const createPlanet = async (req, res) => {
  const body = req.body

  const data = await DbService.createPlanet(body)
  response(res, 201, data)
}

const deletePlanet = async (req, res) => {
  const { id } = req.params

  const data = await DbService.deletePlanet(id)
  response(res, 200, data)
}

module.exports = {
  listAllPlanets,
  listOnePlanet,
  updatePlanet,
  createPlanet,
  deletePlanet
}
