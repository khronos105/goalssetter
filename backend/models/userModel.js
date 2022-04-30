const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Plsease add a name']
    },
    email: {
        type: String,
        required: [true, 'Plsease add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Plsease add a password'],

    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)