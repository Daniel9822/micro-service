const { DB_URI } = require('../utils/envs')

console.log(DB_URI);
class DbServices {
  constructor() {}

  async allCahracter() {
    const response = await fetch(`${DB_URI}/characters`, {
      method: 'GET'
    })

    const { data } = await response.json()
    return data
  }
}

module.exports = new DbServices
