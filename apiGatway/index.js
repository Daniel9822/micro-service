const server = require('./src/server')

server.listen(4000, () => {
  console.log('server listener on port 4000')
})