const mongoose = require('../config/mongoose.js')

const PersonSchema = new mongoose.Schema({
    name: String,
}, {timestamps: true})
const Person = mongoose.model('Person', PersonSchema);

module.exports = Person