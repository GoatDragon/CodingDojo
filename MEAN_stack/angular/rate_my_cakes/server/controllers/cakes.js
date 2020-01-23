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
        })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    addComment: function(req, res) {
        Cake.updateOne({_id: req.params.id}, {
            $push: {comments: {comment: req.body.comment, rating: req.body.rating}}
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



// // ...update 1 document that matches the query object criteria
// User.updateOne({name:'Bob Ross'}, {
//     name: 'Ross Bob',
//     $push: {pets: {name: 'Sprinkles', type: 'Chubby Unicorn' }}
// })
//     .then(result => {
//         // logic with result -- note this will be the original object by default!
//     })
//     .catch(err => res.json(err));
