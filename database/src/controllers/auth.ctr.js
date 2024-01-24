const HandleError = require('../../../authentication/src/utils/handleError')
const AuthService = require('../services/auth.service')
const response = require('../../helpers/response')

const validateUser = async (req, res) => {
  const { email } = req.params

  const user = await AuthService.verifyUser(email)

  if (!user?._id) {
    throw new HandleError('invalid', 401)
  }
  response(res, 200, user)
}

const createUser = async (req, res) => {
  const { email, password } = req.body

  const user = await AuthService.createUser({ email, password })

  response(res, 201, user)
}


module.exports = {
  createUser,
  validateUser
}