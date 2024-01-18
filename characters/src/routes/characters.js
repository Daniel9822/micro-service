const { getAllCharacters, getCharacter, updateCharacter } = require('../controllers')

const router = require('express').Router()

router.get('/', getAllCharacters)
router.get('/:id', getCharacter)
router.put('/:id', updateCharacter)

module.exports = router
