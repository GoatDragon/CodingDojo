const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));

app.get('/cars', (request, response) => {
   response.render("cars.ejs");
});

app.get('/cats', (request, response) => {
   response.render("cats.ejs");
});

app.get('/cars/new', (request, response) => {
   response.render("form.ejs");
});

app.get('/cats/data', (req, res) => {
    cat_data = [{
        name: "daisy",
        food: "kibble",
        age: 4
    }]
    res.render("cat_data.ejs", {cats: cat_data});
})

app.listen(8000, () => console.log("listening on port 8000"));
