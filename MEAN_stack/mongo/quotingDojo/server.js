const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const server = app.listen(1337);
console.log('listening on port 1337')
app.use(express.urlencoded({extended: true}));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoteDB', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
    name: String,
    text: String
}, {timestamps: true})

const Quote = mongoose.model('Quote', UserSchema);

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