const server = require('./src/server')
const { PORT } = require('./src/utils/envs')

server.listen(PORT, () => {
  console.log(`server is listener on port ${PORT}`);
})