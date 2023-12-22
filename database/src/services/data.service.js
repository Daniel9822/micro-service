const PATH = `../models`

class DataService {

  async listData(model){
    const modelDB = require(`${PATH}/${model}`)

    const data = await modelDB.list()
    return data
  }

  async insertData (model, data) {
    const modelDB = require(`${PATH}/${model}`)
    const insert = await modelDB.insert(data)
    return insert
  }

  async getItemById (model, id) {
    const modelDB = require(`${PATH}/${model}`)
    const item = await modelDB.getItemById(id)
    return item
  }

  async deleteItemById (model, id) {
    const modelDB = require(`${PATH}/${model}`)

    const deleteItem = await modelDB.deleteItemById(id)
    return deleteItem
  }

  async updateItem (model, id, body) {
    const modelDB = require(`${PATH}/${model}`)

    const update = await modelDB.updateItem(id, body)
    return update
  }
}

module.exports = new DataService