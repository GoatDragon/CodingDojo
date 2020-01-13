const mongoose = require('mongoose'),
    Quote = mongoose.model('Quote')

module.exports = function(app) {
    app.post('/quotes', (req, res) => {
        const quote = new Quote();
        quote.name = req.body.name;
        quote.text = req.body.text;
        quote.save()
        .then(newQuoteData => console.log('quote created: ', newQuoteData))
        .catch(err => console.log(err));

        res.redirect('/');
    });

    app.get('/', (req, res) => {
        Quote.find()
            .then(data => res.render("index", {quotes: data}))
            .catch(err => res.json(err));
    });
};