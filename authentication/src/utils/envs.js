require('dotenv').config()

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  secret: process.env.SECRET,
  PORT: process.env.PORT,
  DB_URL:
    NODE_ENV.trim() === 'development' ? process.env.DB_URL_LOCAL : process.env.DB_URL
}
