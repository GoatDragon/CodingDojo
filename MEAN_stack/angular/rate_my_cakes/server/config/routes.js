const cakes = require('../controllers/cakes.js');
// const comments = require('../controllers/comments.js');

module.exports = function(app) {
    app.get('/cakes/', (req, res) => {  
        cakes.index(req, res);
    });
    app.get('/cakes/:id', (req, res) => {
        cakes.find(req, res);
    });
    app.post('/cakes/', (req, res) => {
        cakes.create(req, res);
    });
    app.put('/cakes/:id', (req, res) => {
        cakes.update(req, res);
    });
    app.delete('/cakes/:id', (req, res) => {
        cakes.delete(req, res);
    });
    app.put('/newcomment/:id', (req, res) => {
        cakes.addComment(req, res);
    })

    // app.get('/comments/', (req, res) => {  
    //     comments.index(req, res);
    // });
    // app.get('/comments/:id', (req, res) => {
    //     comments.find(req, res);
    // });
    // app.post('/comments/', (req, res) => {
    //     comments.create(req, res);
    // });
    // app.put('/comments/:id', (req, res) => {
    //     comments.update(req, res);
    // });
    // app.delete('/comments/:id', (req, res) => {
    //     comments.delete(req, res);
    // });
};