const response = require('../../helpers/response')
const dataService = require('../services/data.service')
const modelName = 'films'

const listAllFilms = async (req, res) => {
  const allItems = await dataService.listData(modelName)
  response(res, 200, allItems)
}

const listFilm = async (req, res) => {
  const { id } = req.params

  const item = await dataService.getItemById(modelName, id)
  response(res, 200, item)
}

const createFilm = async (req, res) => {
  const body = req.body;

  const create = await dataService.insertData(modelName, body)
  response(res, 201, create)
}

const updateFilm = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const update = await dataService.updateItem(modelName, id, body)
  response(res, 200, update)
}

const deleteFilm = async (req, res) => {
  const { id } = req.params;

  const delFilm = await dataService.deleteItemById(modelName, id)
  response(res, 200, delFilm)
}


module.exports = {
  listAllFilms,
  listFilm,
  updateFilm,
  createFilm,
  deleteFilm
}
