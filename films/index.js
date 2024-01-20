const server = require('./src/server')

const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
  console.log(`Server listener on port ${PORT}`)
})
