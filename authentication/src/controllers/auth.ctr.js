const response = require('../utils/response')
const DbServices = require('../services/handleServices')
const { matchedData } = require('express-validator')
const { hashPassword, comparePassword } = require('../utils/bcrypt')
const HandleError = require('../utils/handleError')
const { generateToken, decodeToken } = require('../jwt/jwt')

const registerUser = async (req, res) => {
  const body = matchedData(req)

  const hash = await hashPassword(body.password)

  const { data } = await DbServices.register({
    email: body.email,
    password: hash
  })

  response(res, 201, data)
}

const loginUser = async (req, res) => {
  const { password, email } = matchedData(req)

  const user = await DbServices.verifyUser(email)

  if (!user?._id) {
    throw new HandleError('Invalid user', 401)
  }

  const compare = await comparePassword(password, user.password)

  if (!compare || compare.error) {
    throw new HandleError('Unauthorized user', 401)
  }

  const token = generateToken(user)

  response(res, 200, {
    user: {
      email: user.email,
      token
    }
  })
}

const authorization = async (req, res) => {
  const { token } = req.body

  const decode = decodeToken(token)

  if (decode?.email) {
    response(res, 200, {
      authorization: true
    })
  } else {
    response(res, 401, {
      error: true,
      message: 'unauthorized user'
    })
  }
}

module.exports = {
  registerUser,
  loginUser,
  authorization
}
