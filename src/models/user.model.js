const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true, minlength: 8 },
    role: { type: String, required: true, default: 'user' },
    phone: { type: String, required: true, minlength: 10, maxlength: 10 },
    email: { type: String, required: true }
});
module.exports = mongoose.model('Users', schema);