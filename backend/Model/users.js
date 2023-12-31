const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: [true, 'Please add a password']
    }
}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema)