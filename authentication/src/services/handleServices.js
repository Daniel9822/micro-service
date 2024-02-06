const { DB_URL } = require('../utils/envs')

console.log(DB_URL);
class DbServices {
  constructor() {}

  async verifyUser(email) {
    const response = await fetch(`${DB_URL}/${email}`, {
      method: 'GET',
    })

    const { data } = await response.json()
    console.log(data);
    return data
  }
  
  async register(user) {
    const response = await fetch(DB_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    const { data } = await response.json()
    return data
  }
}

module.exports = new DbServices()
