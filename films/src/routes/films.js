const router = require('express').Router()
const { createFilm } = require('../controllers')


router.post('/', createFilm)

module.exports = router