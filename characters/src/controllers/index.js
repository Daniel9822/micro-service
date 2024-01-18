const catchError = require('../utils/catchError')
const {
  getAllCharacters,
  getCharacter,
  updateCharacter,
  deleteCharacter,
  createCharacter
} = require('./characters.ctr')

module.exports = {
  getAllCharacters: catchError(getAllCharacters),
  getCharacter: catchError(getCharacter),
  updateCharacter: catchError(updateCharacter),
  createCharacter: catchError(createCharacter),
  deleteCharacter: catchError(deleteCharacter)
}
