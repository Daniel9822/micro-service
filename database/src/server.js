const express = require('express')
const morgan = require('morgan')
const HandleError = require('../../characters/src/utils/handleError')

const server = express()
server.use(morgan('dev'))
server.use(express.json())

server.use('/db', require('./routes'))

server.use('*', (req, res) => {
  throw new HandleError('route not found', 404)
})

server.use((err, req, res, next) => {
  res.status(err?.statusCode || 500).send({
    error: true,
    message: err?.message
  })
})

module.exports = server
