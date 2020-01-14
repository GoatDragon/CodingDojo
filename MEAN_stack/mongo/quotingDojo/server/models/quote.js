const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoteDB', {useNewUrlParser: true});

const QuoteSchema = new mongoose.Schema({
    name: String,
    text: String
}, {timestamps: true})
const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote