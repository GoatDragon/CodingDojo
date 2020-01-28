const Author = require('../models/author.js')

module.exports = {
    index: function(req, res) {
        Author.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    find: function(req, res) {
        Author.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    create: function(req, res) {
        Author.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    update: function(req, res) {
        Author.updateOne({_id: req.params.id}, {
            name: req.body.name,
        }, { runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    delete: function(req, res) {
        Author.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
};