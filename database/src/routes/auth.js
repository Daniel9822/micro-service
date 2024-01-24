const { validateUser, createUser } = require('../controllers/')

const router = require('express').Router()

router.get('/:email', validateUser)
router.post('/', createUser)

module.exports = router