const catchError = require('../utils/catchError')
const {
  listAllPlanets,
  listOnePlanet,
  updatePlanet,
  createPlanet,
  deletePlanet
} = require('./planets')

module.exports = {
  listAllPlanets: catchError(listAllPlanets),
  listOnePlanet: catchError(listOnePlanet),
  updatePlanet: catchError(updatePlanet),
  createPlanet: catchError(createPlanet),
  deletePlanet: catchError(deletePlanet)
}
