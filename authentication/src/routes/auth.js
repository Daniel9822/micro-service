const router = require('express').Router()
const { registerUser, loginUser, authorization } = require('../controllers')
const authValidator = require('../validator/auth.validate')


router.post('/register',authValidator, registerUser)
router.post('/login', authValidator, loginUser)
router.post('/authorization', authorization)

module.exports = router
