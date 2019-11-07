const express = require("express");
const app = express();
app.set('view engine', 'ejs');
const server = app.listen(1337);
console.log('listening on port 1337')
app.use(express.static( __dirname + '/public/dist/public' ));
