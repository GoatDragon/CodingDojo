const people = require('../controllers/people.js');

module.exports = function(app) {
    app.get('/', (req, res) => {  
        people.index(req, res)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    });
    
    app.get('/new/:name/', (req, res) => {
        people.create(req, res)
            .then(newPersonData => console.log(`CREATED: ${newPersonData}`));
        res.redirect('/');
    });

    app.get('/remove/:name', (req, res) => {
        people.delete(req, res)
            .then(deletedPersonData => console.log(`DELETED: ${deletedPersonData}`));
        res.redirect('/');
    });

    app.get('/:name', (req, res) => {
        people.find(req, res);
    });
};