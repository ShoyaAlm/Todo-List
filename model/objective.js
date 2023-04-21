const mongoose = require('mongoose')

const Objective = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please provide the name of your objective'],
        trim: true,
        maxLength: [120, 'Name is too long']
    },
    date:{
        type: date,
        required: [true, 'Please provide your target date of the objective']
    },
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Objective', Objective)