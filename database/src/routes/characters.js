const { listCharacters, createCharacter, listOneCharacter } = require('../controllers/characters.ctr')

const router = require('express').Router()


router.get('/', listCharacters)
router.get('/:id', listOneCharacter)
router.post('/', createCharacter)


module.exports = router
