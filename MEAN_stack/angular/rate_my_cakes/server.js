const express = require("express");
const app = express();
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const mongoose = require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

const server = app.listen(1337);
console.log('listening on port 1337');