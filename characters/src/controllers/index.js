const catchError = require('../utils/catchError')
const { getAllCharacters } = require('./characters.ctr')



module.exports = {
  getAllCharacters: catchError(getAllCharacters)
}