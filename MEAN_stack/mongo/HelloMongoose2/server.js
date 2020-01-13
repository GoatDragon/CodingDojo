const express = require('express');
const app = express();

// app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users2', {useNewUrlParser: true});

//allows us to read req.body
app.use(express.urlencoded({extended: true}));

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});
const User = mongoose.model('User', UserSchema);

app.get('/', (req,res) => {
    User.find()
        .then(data => res.render("index", {users: data}))
});

app.post('/users', (req, res) => {
    User.create(req.body)
        .then(newUserData => console.log(`user created: ${newUserData}`))
        .catch(err => console.log(`error: ${err}`));
    res.redirect('/');
});

const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));