const express = require('express')
const router = express.Router()

const {
    getAllObjectives,
    addObjective,
    deleteObjective,
    updateObjective,
    } = require('../controllers/controller')

router.route('/').get(getAllObjectives).post(addObjective)
router.route('/:id').patch(updateObjective).delete(deleteObjective)

module.exports = router