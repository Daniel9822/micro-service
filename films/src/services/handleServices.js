const { DB_URI: PATH } = require('../utils/envs')

class DbService {
  constructor() {}

  async listFilms() {
    const response = await fetch(PATH, {
      method: 'GET'
    })

    const { data } = await response.json()
    return data
  }

  async listOnFilm(id) {
    const response = await fetch(`${PATH}/${id}`, {
      method: 'GET'
    })

    const { data } = await response.json()
    return data
  }

  async updateFilm(id, film) {
    const response = await fetch(`${PATH}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(film)
    })

    const { data } = await response.json()
    return data
  }

  async deleteFilm(id) {
    const response = await fetch(`${PATH}/${id}`, {
      method: 'DELETE'
    })

    const { data } = await response.json()

    return data
  }
}

module.exports = new DbService()
