const { sign, decode } = require('jsonwebtoken')
const { secret } = require('../utils/envs')

const generateToken = (user) => {
  try {
    const token = sign(user, secret)
    return token
  } catch (error) {
    return {
      error: true,
      message: error.message
    }
  }
}

const decodeToken = (token) => {
  try {
    const data = decode(token)
    return data

  } catch (error) {
    return {
      error: true,
      message: error.message
    }
  }
}

module.exports = {
  generateToken,
  decodeToken
}
