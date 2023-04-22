const express = require('express')
const router = express.Router()

const {
    addObjective,
    deleteObjective,
    updateObjective,
    } = require('../controllers/controller')

    
router.route('/').post(addObjective)
router.route('/:id').patch(updateObjective).delete(deleteObjective)

module.exports = router