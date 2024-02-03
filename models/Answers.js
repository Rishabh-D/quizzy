const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    sessionID: { type: String, required: true },
    responses: { type: Array, required: true },
});

module.exports = mongoose.model('response', responseSchema);
