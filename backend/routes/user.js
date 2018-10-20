const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')
const checkAuth = require('../middleware/auth')

// Create new user
router.post('/signup', userController.signup)
router.post('/login/:id', userController.login)
router.get('/getusers', checkAuth, userController.get_all_users)
router.put('/update_languages/:id', checkAuth, userController.update_languages)

module.exports = router