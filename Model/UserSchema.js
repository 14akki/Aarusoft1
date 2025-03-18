const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true, 
    },
    UserCategory: {
        type: String,
        required: true,    
    },
    UserStatus: {
        type: String,
        required: true,
        enum: ['Active', 'Inactive'], 
        default: 'Active',
    },
    Email: {
        type: String,
        required: true,
    },
    Mobile: {
        type: Number,
        required: true,
    },
    Country: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
});
//
const user = mongoose.model('user', userSchema);

module.exports = user;