const listItems = async (model) => {
  return await model.find({})
}

const insertItem = async (model, data) => {
  return await model.create(data)
}

const listItem = async (model, id) => {
  return await model.findById(id)
}

const deleteItem = async (model, id) => {
  return await model.deleteOne({ _id: id })
}

const updateItem = async (model, id, data) => {
  return model.findByIdAndUpdate(id, data, { new: true })
}

module.exports = {
  listItems,
  insertItem,
  listItem,
  deleteItem,
  updateItem
}
