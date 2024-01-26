require('dotenv').config()

module.exports = {
  secret: process.env.SECRET,
  authorization_url: process.env.AUTHORIZATION_URL
}