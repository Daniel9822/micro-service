require('dotenv').config()

const NODE_ENV = process.env.NODE_ENV
module.exports = {
  DB_URI: NODE_ENV === 'development' ? process.env.DB_URL_LOCAL : process.env.DB_URI
}