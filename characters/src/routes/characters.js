const { getAllCharacters, getCharacter, updateCharacter, createCharacter, deleteCharacter } = require('../controllers')

const router = require('express').Router()

router.get('/', getAllCharacters)
router.get('/:id', getCharacter)
router.put('/:id', updateCharacter)
router.post('/', createCharacter)
router.delete('/:id', deleteCharacter)


module.exports = router
