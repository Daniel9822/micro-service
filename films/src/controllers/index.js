const catchError = require('../utils/catchError')
const {
  createFilm,
  getAllFilms,
  updateFilms,
  getFilmById,
  deleteFilm
} = require('./films.ctr')

module.exports = {
  createFilm: catchError(createFilm),
  getAllFilms: catchError(getAllFilms),
  updateFilms: catchError(updateFilms),
  getAllFilms: catchError(getAllFilms),
  deleteFilm: catchError(deleteFilm)
}
