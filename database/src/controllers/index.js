const catchError = require('../../helpers/catchError')
const {
  listCharacters,
  listOneCharacter,
  updateCharacter,
  deleteCharacter,
  createCharacter
} = require('./characters.ctr')

module.exports = {
  listCharacters: catchError(listCharacters),
  listOneCharacter: catchError(listOneCharacter),
  updateCharacter: catchError(updateCharacter),
  deleteCharacter: catchError(deleteCharacter),
  createCharacter: catchError(createCharacter)
}
