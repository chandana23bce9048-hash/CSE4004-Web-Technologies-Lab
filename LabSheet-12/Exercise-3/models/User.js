const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// Create model
module.exports = mongoose.model('User', userSchema);