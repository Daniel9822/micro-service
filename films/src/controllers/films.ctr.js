const response = require('../utils/response')
const DbService = require('../services/handleServices')

const getAllFilms = async (req, res) => {
  const data = await DbService.listFilms()
  response(res, 200, data)
}

const getFilmById = async (req, res) => {
  const { id } = req.params

  const data = await DbService.listOnFilm(id)
  response(res, 200, data)
}

const createFilm = async (req, res) => {
  const body = req.body

  const data = await DbService.createFilm(body)
  response(res, 201, data)
}

const updateFilms = async (req, res) => {
  const { id } = req.params
  const body = req.body

  const data = await DbService.updateFilm(id, body)
  response(res, 200, data)
}

const deleteFilm = async (req, res) => {
  const { id } = req.params

  const data = await DbService.deleteFilm(id)
  response(res, 200, data)
}

module.exports = {
  createFilm,
  getAllFilms,
  getFilmById,
  updateFilms,
  deleteFilm
}
