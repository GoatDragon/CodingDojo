const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const server = app.listen(1337);
console.log('listening on port 1337')
app.use(express.urlencoded({extended: true}));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
}, {timestamps: true})
// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

// Modify the '/users' post route to use our User model to save a new user to the database.
app.post('/users', (req, res) => {
    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
    .then(newUserData => console.log('user created: ', newUserData))
    .catch(err => console.log(err));

    res.redirect('/');
});

// The last thing we need is to query our database for our users that we create with our form.  Modify your root route accordingly:
app.get('/', (req, res) => {  
    User.find()
        .then(data => res.render("index", {users: data}))
        .catch(err => res.json(err));
});