const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoteDB', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
    name: String,
    text: String
}, {timestamps: true})
const Quote = mongoose.model('Quote', UserSchema);

require('./server/config/routes.js')(app);

const server = app.listen(1337);
console.log('listening on port 1337');