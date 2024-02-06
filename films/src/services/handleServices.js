const { DB_URL } = require('../utils/envs')

console.log(DB_URL);
class DbService {
  constructor() {}

  async listFilms() {
    const response = await fetch(DB_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const { data } = await response.json()
    return data
  }

  async listOnFilm(id) {
    const response = await fetch(`${DB_URL}/${id}`, {
      method: 'GET'
    })

    const { data } = await response.json()
    return data
  }

  async updateFilm(id, film) {
    const response = await fetch(`${DB_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(film)
    })

    const { data } = await response.json()
    return data
  }

  async createFilm(film) {
    const response = await fetch(DB_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(film)
    })

    const { data } = await response.json()
    return data
  }

  async deleteFilm(id) {
    const response = await fetch(`${DB_URL}/${id}`, {
      method: 'DELETE'
    })

    const { data } = await response.json()

    return data
  }
}

module.exports = new DbService()
