const response = require('../utils/response')

const getAllFilms = async (req, res) => {
  response(res, 200, {
    total: 'muchas films'
  })
}

const createFilm = async (req, res) => {
  response(res, 201, {
    hello: 'hello word '
  })
}

module.exports = {
  createFilm,
  getAllFilms
}
