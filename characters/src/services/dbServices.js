const { DB_URI } = require('../utils/envs')

console.log(DB_URI);
class DBServices {
  constructor() {}

  async allCharacter() {
    const response = await fetch(`${DB_URI}/characters`, {
      method: 'GET'
    })

    const { data } = await response.json()
    return data
  }

  async getCharacterById(id) {
    const response = await fetch(`${DB_URI}/characters/${id}`, {
      method: 'GET'
    })

    const { data } = await response.json()
    return data
  }

  async updateCharacter(id, character) {
    const response = await fetch(`${DB_URI}/characters/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
    })

    const { data } = await response.json()
    return data
  }

  async createCharacter(character) {
    const response = await fetch(`${DB_URI}/characters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
    })

    const { data } = await response.json()
    return data
  }

  async deleteCharacter(id) {
    const response = await fetch(`${DB_URI}/characters/${id}`, {
      method: 'DELETE'
    })

    const { data } = await response.json()
    return data
  }
}

module.exports = new DBServices()
