const express = require('express')
const morgan = require('morgan')
const { createProxyMiddleware } = require("http-proxy-middleware");
const proxyReq = require('./utils/onRequest');

const server = express()

server.use(morgan('dev'))

server.use('/characters', createProxyMiddleware({
  target: 'http://localhost:3000/characters',
  changeOrigin: true,
  onProxyReq: proxyReq
}))

server.use('films', createProxyMiddleware({
  target: 'http://localhost:3001/films',
  changeOrigin: true,
  onProxyReq: proxyReq
}))

server.use('planets', createProxyMiddleware({
  target: 'http://localhost:3002/planets',
  changeOrigin: true,
  onProxyReq: proxyReq
}))


module.exports = server