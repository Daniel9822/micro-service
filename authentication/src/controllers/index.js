const catchError = require('../utils/catchError')
const { registerUser, loginUser, authorization } = require('./auth.ctr') 

module.exports = {
  registerUser: catchError(registerUser),
  loginUser: catchError(loginUser),
  authorization: catchError(authorization)
}