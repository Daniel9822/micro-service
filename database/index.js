require('dotenv').config()
const connect = require('./src/config/db.config')
const server = require('./src/server')

server.listen(4001, async () => {
  await connect()
  console.log('db is listener on port 4001') 
})