const DbServices = require('../services/dbServices')
const response = require('../utils/response')

const getAllCharacters = async (req, res) => {
  const data = await DbServices.allCahracter()
  response(res, 200, data) 
}

module.exports = {
  getAllCharacters
}
