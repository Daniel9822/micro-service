const express = require('express')
const morgan = require('morgan')
const { createProxyMiddleware } = require('http-proxy-middleware')
const proxyReq = require('./utils/onRequest')
const authorization = require('./middleware/authorization')
const {
  authorization: auth,
  characters,
  films,
  planets
} = require('../src/utils/envs')

const server = express()

server.use(morgan('dev'))

server.use(
  '/auth/:action(login | register)?',
  createProxyMiddleware({
    target: auth,
    changeOrigin: true,
    onProxyReq: proxyReq
  })
)

server.use(
  '/characters',
  createProxyMiddleware({
    target: characters,
    changeOrigin: true,
    onProxyReq: proxyReq
  })
)

server.use(
  '/films',
  authorization,
  createProxyMiddleware({
    target: films,
    changeOrigin: true,
    onProxyReq: proxyReq
  })
)

server.use(
  '/planets',
  createProxyMiddleware({
    target: planets,
    changeOrigin: true,
    onProxyReq: proxyReq
  })
)

module.exports = server
