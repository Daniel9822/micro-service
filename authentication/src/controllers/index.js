const catchError = require('../utils/catchError')
const { registerUser, loginUser } = require('./auth.ctr') 

module.exports = {
  registerUser: catchError(registerUser),
  loginUser: catchError(loginUser)
}