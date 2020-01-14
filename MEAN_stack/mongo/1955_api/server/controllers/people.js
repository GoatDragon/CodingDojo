const Person = require('../models/person.js')

module.exports = {
    create: function(req, res) {
        const person = new Person();
        person.name = req.params.name;
        return person.save()
    },
    find: function(req, res) {
        Person.findOne({name: req.params.name})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },    
    index: function(req, res) {
        return Person.find()
    },
    delete: function (req, res) {
        return Person.remove({name: req.params.name})
    }
}