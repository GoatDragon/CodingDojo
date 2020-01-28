const authors = require('../controllers/authors.js');
const path = require("path");

module.exports = function(app) {
    app.get('/authors/', (req, res) => {  
        authors.index(req, res)
    });
    app.get('/authors/:id', (req, res) => {
        authors.find(req, res);
    });
    app.post('/authors/', (req, res) => {
        authors.create(req, res)
    });
    app.put('/authors/:id', (req, res) => {
        authors.update(req, res)
    });
    app.delete('/authors/:id', (req, res) => {
        authors.delete(req, res)
    });
    app.put('/quotes/:id', (req, res) => {
        authors.addQuote(req, res)
    });
    app.put('/removequotes/:id', (req, res) => {
        authors.deleteQuote(req, res)
    });
    app.put('/upvotequote/', (req, res) => {
        authors.upVoteQuote(req, res)
    });
    app.put('/downvotequote/', (req, res) => {
        authors.downVoteQuote(req, res)
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
};