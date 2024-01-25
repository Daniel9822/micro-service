const express = require('express')
const morgan = require('morgan')
const { createProxyMiddleware } = require('http-proxy-middleware')
const proxyReq = require('./utils/onRequest')
const authorization = require('./middleware/authorization')

const server = express()

server.use(morgan('dev'))

server.use(
  '/auth/:action(login | register)?', 
  createProxyMiddleware({
    target: 'http://localhost:5000',
    changeOrigin: true,
    onProxyReq: proxyReq
  })
)

server.use(
  '/characters',
  createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
    onProxyReq: proxyReq
  })
)

server.use(
  '/films',
  authorization,
  createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
    onProxyReq: proxyReq
  })
)

server.use(
  '/planets',
  createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true,
    onProxyReq: proxyReq
  })
)

module.exports = server
