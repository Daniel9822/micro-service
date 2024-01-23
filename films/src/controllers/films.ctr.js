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

const updateFilms = (req, res) => {
  const { id } = req.params;

}

const getFilmById = (req, res) => {
  const { id } = req.params
}

const deleteFilm = (req, res) => {
  
}

module.exports = {
  createFilm,
  getAllFilms,
  getFilmById,
  updateFilms,
  deleteFilm
}
