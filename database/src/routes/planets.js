const {
  listPlanets,
  listPlanet,
  createPlanet,
  updatePlanet,
  deletePlanet
} = require('../controllers/planets.ctr')

const router = require('express').Router()

router.get('/', listPlanets)
router.get('/:id', listPlanet)
router.put('/:id', updatePlanet)
router.post('/', createPlanet)
router.delete('/:id', deletePlanet)

module.exports = router
