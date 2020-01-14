const quotes = require('../controllers/quotes.js')

module.exports = function(app) {
    app.post('/quotes', (req, res) => {
        quotes.create(req,res)
            .then(newQuoteData => {
                console.log('quote created: ', newQuoteData);
                res.redirect('/')
            })
            .catch(err => console.log(err));
    });

    app.get('/', (req, res) => {  
        quotes.index(req, res)
            .then(data => res.render("index", {quotes: data}))
            .catch(err => res.json(err));
    });
};