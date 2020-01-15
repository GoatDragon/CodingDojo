const tasks = require('../controllers/tasks.js');

module.exports = function(app) {
    app.get('/task/', (req, res) => {  
        tasks.index(req, res)
    });
    app.get('/task/:id', (req, res) => {
        tasks.find(req, res);
    });
    app.post('/task/', (req, res) => {
        tasks.create(req, res)
    });
    app.put('/task/:id', (req, res) => {
        tasks.update(req, res)
    });
    app.delete('/task/:id', (req, res) => {
        tasks.delete(req, res)
    });
};