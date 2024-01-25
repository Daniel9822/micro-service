const { sign, decode, verify } = require('jsonwebtoken')
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
    const data = verify(token, secret)
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
