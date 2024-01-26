const { listAllPlanets, listOnePlanet, updatePlanet, createPlanet, deletePlanet } = require('../controllers')

const router = require('express').Router()

router.get('/', listAllPlanets)
router.get('/:id', listOnePlanet)
router.put('/:id', updatePlanet)
router.post('/', createPlanet)
router.delete('/:id', deletePlanet)

module.exports = router
