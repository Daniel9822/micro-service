require('dotenv').config()

module.exports = {
  secret: process.env.SECRET,
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL
}