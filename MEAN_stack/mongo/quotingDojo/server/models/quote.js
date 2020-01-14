const mongoose = require('../config/mongoose.js')

const QuoteSchema = new mongoose.Schema({
    name: String,
    text: String
}, {timestamps: true})
const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote