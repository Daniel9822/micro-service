const router = require('express').Router()
const { createFilm, getAllFilms } = require('../controllers')


router.get('/', getAllFilms)
router.post('/', createFilm)

module.exports = router