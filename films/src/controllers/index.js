const catchError = require('../utils/catchError')
const { createFilm } = require('./films.ctr')

module.exports = {
  createFilm: catchError(createFilm)
}
