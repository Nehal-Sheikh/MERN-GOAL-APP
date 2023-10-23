const express = require('express');
const router = express.Router();
const { getUserActivity, postUserActivity, updateUserActivity, deleteUserActivity } = require('../Controllers/userActivityController')

router.get('/', getUserActivity)

router.post('/', postUserActivity)

router.put('/:userId', updateUserActivity)

router.delete(('/:userId'), deleteUserActivity)

module.exports = router;