const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    pass: String,
    pressets: [{ name: String, date: Date }],
    date: { type: Date, default: Date.now },
    active: Boolean
});

module.exports = mongoose.model('User', userSchema);
