const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const server = app.listen(1337);
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
 name: String,
 age: Number
})
// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

app.get('/', (req,res) => {
    res.render('index.ejs')
});