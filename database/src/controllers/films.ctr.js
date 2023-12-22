const dataService = require('../services/data.service')
const modelName = 'films'

const listAllFilms = async (req, res) => {
  const allItems = await dataService.listData(modelName)
  res.status(200).json(allItems)
}

const listFilm = async (req, res) => {
  const { id } = req.params

  const item = await dataService.getItemById(modelName, id)
  res.status(200).send(item)
}

const createFilm = async (req, res) => {
  const body = req.body;

  const create = await dataService.insertData(modelName, body)
  res.status(201).send(create)
}

const updateFilm = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const update = await dataService.updateItem(modelName, id, body)
  res.status(200).send(update)
}

const deleteFilm = async (req, res) => {
  const { id } = req.params;

  const delFilm = await dataService.deleteItemById(modelName, id)
  res.status(200).send(delFilm)
}


module.exports = {
  listAllFilms,
  listFilm,
  updateFilm,
  createFilm,
  deleteFilm
}
