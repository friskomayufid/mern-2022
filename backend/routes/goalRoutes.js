const express = require('express')
const {
  getGoals,
  deleteGoal,
  updateGoal,
  setGoal,
} = require('../controllers/goalController')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

router.use(protect)

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router
