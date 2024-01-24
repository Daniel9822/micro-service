const User = require('../models/user')

class Auth {
  async verifyUser(email) {
    const user = await User.findOne({ email })
    return user
  }

  async createUser(user) {
    const create = await User.create(user)
    return create
  }
}


module.exports = new Auth