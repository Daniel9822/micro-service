const server = require('./src/server')
const { PORT } = require('./src/utils/envs')
 
server.listen(PORT || 5000, () => {
  console.log(`server on listener on port ${PORT}`)
})
