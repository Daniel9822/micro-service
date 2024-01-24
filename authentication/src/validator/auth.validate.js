const { check, body } = require('express-validator')
const validateResult = require('../utils/handleValidator')

const authValidator = [
  check('email').notEmpty().isEmail(),
  check('password').notEmpty(),
  (req, res, next) => validateResult(req, res, next)
]


module.exports = authValidator