const express = require('express')
const userController = require('../controllers/user.controller')
const { verifyToken } = require('../middleware/jwt.middlware')

const router = express.Router()

router.post('/login', userController.login)
router.post('/register', userController.register)
router.get('/profile', verifyToken, userController.profile)

module.exports = router
