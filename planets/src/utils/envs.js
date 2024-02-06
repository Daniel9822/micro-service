require('dotenv').config()

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  DB_URL:
    NODE_ENV === 'development' ? process.env.DB_URL_LOCAL : process.env.DB_URL,
  PORT: process.env.PORT
}
