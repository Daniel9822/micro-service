const { listCharacters, createCharacter, listOneCharacter, deleteCharacter, updateCharacter } = require('../controllers')

const router = require('express').Router()


router.get('/', listCharacters)
router.get('/:id', listOneCharacter)
router.post('/', createCharacter)
router.delete('/:id', deleteCharacter)
router.put('/:id', updateCharacter)


module.exports = router
