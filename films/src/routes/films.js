const router = require('express').Router()
const {
  createFilm,
  getAllFilms,
  updateFilms,
  deleteFilm
} = require('../controllers')
const { getFilmById } = require('../controllers/films.ctr')

router.get('/', getAllFilms)
router.post('/', createFilm)
router.get('/:id', getFilmById)
router.put('/:id', updateFilms)
router.delete('/:id', deleteFilm)

module.exports = router
