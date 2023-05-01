const express = require('express')
const router = express.Router()

const {
    getAllObjectives,
    getObjective,
    addObjective,
    deleteObjective,
    updateObjective,
    } = require('../controllers/controller')

router.route('/').get(getAllObjectives).post(addObjective)
router.route('/:id').get(getObjective).patch(updateObjective).delete(deleteObjective)

module.exports = router