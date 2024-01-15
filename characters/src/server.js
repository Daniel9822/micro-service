const express = require('express')
const routes = require('../src/routes/characters')
const morgan = require('morgan')

const server = express()

server.use(express.json())
server.use(morgan('dev'))

server.use('/characters', routes)

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message
  })
})

module.exports = server
