const response = require("../utils/response")

const createFilm = (req, res) => {
  res.status(200).send('hola')
  // response(res, 201, {
  //   hello: 'hello word'
  // })
}


module.exports = {
  createFilm
}