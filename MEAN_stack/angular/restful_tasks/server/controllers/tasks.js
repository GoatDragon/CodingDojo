const Task = require('../models/task.js')

module.exports = {
    // home: function(req, res){
    //     res.json({test: 'what'})
    // },
    index: function(req, res) {
        Task.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    find: function(req, res) {
        Task.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    create: function(req, res) {
        Task.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    update: function(req, res) {
        Task.updateOne({_id: req.params.id}, {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    delete: function(req, res) {
        Task.remove({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
};