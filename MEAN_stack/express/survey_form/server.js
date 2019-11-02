const express = require("express");
const app = express();
const session = require('express-session');
app.use(session({
  secret: 'supersecretpassword',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));


app.get('/', (req,res) => {
    res.redirect('form.html');
});

app.post('/results', (req,res) => {
    res.render('results.ejs', {results: req.body})
});

app.listen(8000, () => console.log("listening on port 8000"));