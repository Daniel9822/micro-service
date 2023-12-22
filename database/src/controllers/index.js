const catchError = require('../../helpers/catchError')
const {
  listCharacters,
  listOneCharacter,
  updateCharacter,
  deleteCharacter,
  createCharacter
} = require('./characters.ctr')
const {
  listAllFilms,
  listFilm,
  updateFilm,
  deleteFilm,
  createFilm
} = require('./films.ctr')

module.exports = {
  listCharacters: catchError(listCharacters),
  listOneCharacter: catchError(listOneCharacter),
  updateCharacter: catchError(updateCharacter),
  deleteCharacter: catchError(deleteCharacter),
  createCharacter: catchError(createCharacter),
  //films
  listAllFilms: catchError(listAllFilms),
  listFilm: catchError(listFilm),
  updateFilm: catchError(updateFilm),
  deleteFilm: catchError(deleteFilm),
  createFilm: catchError(createFilm)
}
