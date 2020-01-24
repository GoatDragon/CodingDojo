const express = require("express");
const app = express();
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

const server = app.listen(1337);
console.log('listening on port 1337');