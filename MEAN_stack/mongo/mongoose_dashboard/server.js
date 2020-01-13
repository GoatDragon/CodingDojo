const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const server = app.listen(1337);
console.log('listening on port 1337')
app.use(express.urlencoded({extended: true}));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dashboard', {useNewUrlParser: true});

const mongooseSchema = new mongoose.Schema({
    name: String,
    color: String,
}, {timestamps: true})
const Mongoose = mongoose.model("Mongoose", mongooseSchema)

app.get('/mongooses', (req, res) => {
    Mongoose.find({})
        .then(data => res.render('index', {mongooses: data}))
        .catch(err => console.log(err))
})

app.get('/mongooses/new', (req, res) => {
    res.render("new")
})

app.post('/mongooses', (req, res) => {
    const mon = new Mongoose()
    mon.name = req.body.name
    mon.color = req.body.color
    mon.save()
    // .then(newMongoose => console.log(newMongoose))
    // .catch(err => console.log('you dun goofed', err))
    res.redirect('/')
})

app.get('/mongooses/:id', (req, res) => {
    Mongoose.find({_id: req.params.id})
        .then(data => res.render('index', {mongooses: data}))
        .catch(err => console.log(err))
    })

app.get('/mongooses/edit/:id', (req, res) => {
    console.log(req.params.id)
    Mongoose.find({_id: req.params.id})
        .then(data => res.render('edit', {mongoose: data}))
        .catch(err => console.log(err))
    })

app.post('/mongooses/:id', (req,res) => {
    Mongoose.updateOne({_id: req.params.id}, {
        name: req.body.name,
        color: req.body.color
    })
    .then(res.redirect('/mongooses/'+req.params.id))
    .catch(err => console.log(err))
})

app.get('/mongooses/destroy/:id', (req,res) => {
    Mongoose.deleteOne({_id: req.params.id})
    .then(res.redirect('/mongooses'))
    .catch(err => console.log(err))
})