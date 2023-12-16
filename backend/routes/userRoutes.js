const express = require('express')
const router = express.Router();
const protect = require('../middleware/authMidlleware')

const { getUser, RegisterUser, loginUser } = require('../Controllers/userController')

router.get('/me', protect, getUser)

router.post('/', RegisterUser)

router.post('/login', loginUser)

module.exports = router;