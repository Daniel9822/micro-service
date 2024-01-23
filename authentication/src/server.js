const express = require('express')
const morgan = require('morgan')
const routes = require('../src/routes/auth')

const server = express()

server.use(morgan('dev'))
server.use(express.json())

server.use('/auth', routes)

server.use('*', (req, res) => {
  res.status(404).send({
    message: 'router not found'
  })
})

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message
  })
})

module.exports = server
