const {
  listAllFilms,
  listFilm,
  updateFilm,
  createFilm,
  deleteFilm
} = require('../controllers/films.ctr')

const router = require('express').Router()

router.get('/', listAllFilms)
router.get('/:id', listFilm)
router.put('/:id', updateFilm)
router.post('/', createFilm)
router.delete('/:id', deleteFilm)

module.exports = router
