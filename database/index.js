require('dotenv').config()
const connect = require('./src/config/db.config')
const server = require('./src/server')

const NODE_ENV = process.env.NODE_ENV

if (NODE_ENV !== 'test') {
  server.listen(4001, async () => {
    console.log('db is listener on port 4001')
  })
}

connect().then()

module.exports = server