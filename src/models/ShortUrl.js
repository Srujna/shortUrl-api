const mongoose = require('mongoose');

module.exports = mongoose.model('ShortUrl', mongoose.Schema({
    alias: {
        type: String,
        unique: true,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}));