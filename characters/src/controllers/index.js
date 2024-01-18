const catchError = require('../utils/catchError')
const { getAllCharacters, getCharacter, updateCharacter } = require('./characters.ctr')



module.exports = {
  getAllCharacters: catchError(getAllCharacters),
  getCharacter: catchError(getCharacter),
  updateCharacter: catchError(updateCharacter)
}