const express = require("express");
const session = require('express-session');
const app = express();
app.use(session({
  secret: 'supersecretpassword',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));

app.get('/', (req, res) => {
    if (!req.session.count) {
        req.session.count = 1
    };
    else {
        req.session.count ++
    };
    res.render("counter.ejs", {count: req.session.count});
});

app.get('/reset', (req, res) => {
    req.session.count = 0;
    res.redirect('/');
});

app.get('/addtwo', (req,res) => {
    req.session.count ++;
    res.redirect('/');
});


app.listen(8000, () => console.log("listening on port 8000"));