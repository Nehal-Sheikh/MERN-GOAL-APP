const express = require('express')
const router = express.Router();

const { getUser, RegisterUser, loginUser } = require('../Controllers/userController')

router.get('/me', getUser)

router.post('/', RegisterUser)

router.post('/login', loginUser)

module.exports = router;