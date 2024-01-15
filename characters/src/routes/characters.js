const { getAllCharacters } = require('../controllers')

const router = require('express').Router()

router.get('/', getAllCharacters)


module.exports = router