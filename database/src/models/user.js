const { Schema, model } = require('mongoose')

const userSchema = Schema({
  email: String,
  password: String
})

const user = model('user', userSchema)

module.exports = user
