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
}

module.exports = new DataService