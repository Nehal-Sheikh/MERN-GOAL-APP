const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMidlleware')
const { getGoals, postGoal, updateGoal, deleteGoal } = require('../Controllers/goalController')

router.get('/', protect, getGoals)

router.post('/', protect, postGoal)

router.put('/:goalId', protect, updateGoal)

router.delete('/:goalId', protect, deleteGoal)

module.exports = router;