const mongoose = require('mongoose')

const UserActivitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        ref: 'User'
    },
    desc: {
        type: String,
        required: true
    },
    date_and_time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    }
}, { timestamps: true } )

module.exports = mongoose.model('UserActivity', UserActivitySchema)