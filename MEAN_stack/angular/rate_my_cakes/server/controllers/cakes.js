const Cake = require('../models/cake.js')

module.exports = {
    index: function(req, res) {
        Cake.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    find: function(req, res) {
        Cake.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    create: function(req, res) {
        Cake.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    update: function(req, res) {
        Cake.updateOne({_id: req.params.id}, {
            baker: req.body.baker,
            image: req.body.image,
            comments: req.body.comment
        })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    delete: function(req, res) {
        Cake.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
};