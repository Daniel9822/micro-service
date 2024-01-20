const catchError = require('../utils/catchError')
const { createFilm, getAllFilms } = require('./films.ctr')

module.exports = {
  createFilm: catchError(createFilm),
  getAllFilms: catchError(getAllFilms)
}
