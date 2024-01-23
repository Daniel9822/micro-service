const router = require('express').Router()
const { createFilm, getAllFilms } = require('../controllers')


router.get('/', getAllFilms)
router.post('/', createFilm)
router.get('/')
router.put('/')
router.delete('/')

module.exports = router