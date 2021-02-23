const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    university: {
        type: String,
        required: false
    },
    startYear: {
        type: Number,
        required: false
    },
    estimatedGraduation: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        required: false,
        default: "Studies ongoing"
    },
    registrationDate: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Posts', PostSchema);