const Quote = require('../models/quote.js')

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