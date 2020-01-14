const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoteDB', {useNewUrlParser: true});

const QuoteSchema = new mongoose.Schema({
    name: String,
    text: String
}, {timestamps: true})
const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = {
    create: function(req, res) {
        const quote = new Quote();
        quote.name = req.body.name;
        quote.text = req.body.text;
        return quote.save()
    },
    index: function(req, res){
        return Quote.find()
    }
}