const { DB_URL } = require('../utils/envs')

class DbService {
  async listPlanets() {
    const response = await fetch(DB_URL, {
      method: 'GET'
    })

    const { data } = await response.json()

    return data
  }

  async listPlanet(id) {
    const response = await fetch(`${DB_URL}/${id}`, {
      method: 'GET'
    })

    const { data } = await response.json()

    return data
  }

  async updatePlanet(id, body) {
    const response = await fetch(`${DB_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const { data } = await response.json()

    return data
  }

  async createPlanet (planet) {
    const response = await fetch(DB_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(planet)
    })

    const { data } = await response.json()
    return data
  }

  async deletePlanet (id) {
    const response = await fetch(`${DB_URL}/${id}`, {
      method: 'DELETE'
    })

    const { data } = await response.json()
    return data
  }

}

module.exports = new DbService()
