const router = require('express').Router()
const fs = require('fs')

const path = __dirname

const removeExtencion = (filename) => {
  return filename.split('.').shift()
}

fs.readdirSync(path).filter((filename) => {
  const name = removeExtencion(filename)
  if (name !== 'index') {
    router.use(`/${name}`, require(`./${filename}`))
  }
})

module.exports = router
