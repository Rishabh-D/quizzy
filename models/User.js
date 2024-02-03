const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    sessionID: { type: String, required: true },
    section: { type: String, required: true },
    name: { type: String, required: true },
    userTestStatus: { type: String, required: true },
});

module.exports = mongoose.model('user', userSchema);
