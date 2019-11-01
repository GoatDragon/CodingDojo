const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));

app.get('/cars', (request, response) => {
   response.render("cars.ejs");
})

;app.get('/cats', (request, response) => {
   response.render("cats.ejs");
});

;app.get('/cars/new', (request, response) => {
   response.render("form.ejs");
});

app.listen(8000, () => console.log("listening on port 8000"));
