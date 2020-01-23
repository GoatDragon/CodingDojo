const Comment = require('../models/comment.js')

module.exports = {
    index: function(req, res) {
        Comment.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    find: function(req, res) {
        Comment.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    create: function(req, res) {
        const comment = new Comment();
        comment.comment = req.body.comment;
        comment.rating = req.body.rating;
        Comment.save()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    update: function(req, res) {
        Comment.updateOne({_id: req.params.id}, {
            comment: req.body.comment,
            rating: req.body.rating
        })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    delete: function(req, res) {
        Comment.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
};